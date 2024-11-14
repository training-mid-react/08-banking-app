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
      } catch (error: any) {
        console.log(error);
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
          username: credentials.username,
          password: credentials.password,
        },
      };

      dispatch(registerRequest(request));
      try {
        const response = await register(request);
        dispatch(registerSuccess(response));
      } catch (error: any) {
        console.log(error);
        dispatch(registerFailure(error.message));
      }
    },
    [dispatch]
  );

  return {
    handleLogin,
    handleRegister,
    state: state,
  };
};

export default useAuth;
