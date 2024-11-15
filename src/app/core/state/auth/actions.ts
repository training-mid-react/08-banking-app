import { User } from "../../interfaces/user";
import { authInitialState } from "./reducer";

export const authActions = {
  LOG_IN: 'LOG_IN',
  LOG_OUT: 'LOG_OUT',
};

export const login = (user: User) => {
  return({
    type: authActions.LOG_IN,
    payload: user,
  })
};

export const logout = () => ({
  type: authActions.LOG_OUT,
  payload: authInitialState,
});
