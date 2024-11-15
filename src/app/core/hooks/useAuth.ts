import { useContext, useCallback } from "react";
import { AppContext } from "../state/AppContext";
import { loginFailure, loginRequest, loginSuccess, registerFailure, registerRequest, registerSuccess } from "../state/auth/actions";
import { login, register } from "../services/auth.service";
import { createBankAccount } from "../services/account.service";

const createRequest = (body: Record<string, any>) => ({
  dinHeader: {
    device: "",
    language: "",
    uuid: "",
    ip: "",
    transactionTime: new Date().toISOString(),
  },
  dinBody: body,
});

export const useAuth = () => {
  const { state, dispatch } = useContext(AppContext)!;

  const handleLogin = useCallback(
    async (credentials: { username: string; password: string }): Promise<boolean> => {
      const request = createRequest({
        username: credentials.username,
        password: credentials.password,
      });
  
      dispatch(loginRequest(request));
      try {
        const response = await login(request);
        const { token, customerId } = response.dinBody;
  
        dispatch(loginSuccess(response));
        localStorage.setItem("token", token);
        localStorage.setItem("customerId", customerId);
  
        return true; 
      } catch (error: any) {
        dispatch(loginFailure(error.message));
        return false; 
      }
    },
    [dispatch]
  );
  

  const handleRegister = useCallback(
    async (credentials: {
      name: string;
      lastname: string;
      username: string;
      password: string;
      roles: string[];
    }) => {
      const request = createRequest({
        name: credentials.name,
        lastname: credentials.lastname,
        username: credentials.username,
        password: credentials.password,
        roles: credentials.roles,
      });

      dispatch(registerRequest(request));
      try {
        const response = await register(request);

        if (response.error || response.statusCode >= 400) {
          throw new Error(response.message || "Error en el registro");
        }

        const { token, customerId } = response.dinBody;

        dispatch(registerSuccess(response));
        localStorage.setItem("token", token);
        localStorage.setItem("customerId", customerId);

        const accountRequest = createRequest({
          customerId,
          amount: 1000,
        });

        await createBankAccount(accountRequest);
      } catch (error: any) {
        dispatch(registerFailure(error.message));
      }
    },
    [dispatch]
  );

  return {
    handleLogin,
    handleRegister,
    state,
  };
};

export default useAuth;
