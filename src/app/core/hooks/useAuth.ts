import { useContext, useCallback } from "react";
import { AppContext } from "../state/AppContext";
import { loginFailure, loginRequest, loginSuccess, registerFailure, registerRequest, registerSuccess } from "../state/auth/actions";
import { login, register } from "../services/auth.service";

export const useAuth = () => {
  const { state, dispatch } = useContext(AppContext)!;

  const handleLogin = useCallback(
    async (credentials: any) => {
      const request = {
        dinHeader: {
          device: "",
          language: "",
          uuid: "",
          ip: "",
          transactionTime: new Date().toISOString(),
        },
        dinBody: {
          username: credentials.username,
          password: credentials.password,
        },
      };

      dispatch(loginRequest(request));
      try {
        const response = await login(request);

        dispatch(loginSuccess(response));

        localStorage.setItem('token', response.dinBody.token);
        // esto es un chanchujo
        localStorage.setItem('username', credentials.username);
      } catch (error: any) {
        dispatch(loginFailure(error.message));
      }
    },
    [dispatch]
  );

  const handleRegister = useCallback(
    async (credentials: any) => {
      const request = {
        dinHeader: {
          device: "",
          language: "",
          uuid: "",
          ip: "",
          transactionTime: new Date().toISOString(),
        },
        dinBody: {
          name: credentials.name,         
          lastname: credentials.lastname,
          username: credentials.username,
          password: credentials.password,
          roles: credentials.roles
        },
      };
  
      dispatch(registerRequest(request));
      
      try {
        const response = await register(request);
  
        if (response.error || response.statusCode >= 400) {
          throw new Error(response.message || "Error en el registro");
        }
  
        dispatch(registerSuccess(response));

        localStorage.setItem('token', response.dinBody.token);

        // esto es un chanchujo
        localStorage.setItem('username', credentials.username);
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
