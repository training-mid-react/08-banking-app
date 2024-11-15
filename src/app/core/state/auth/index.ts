import { User } from "../../interfaces/user";
import { authActions } from "./actions";

export const authCases = {
  [authActions.LOG_IN]: (state: User, payload?: User) => {
    return {...state ,...payload};
  },
  [authActions.LOG_OUT]: (state: User, payload?: any) => {
    return {...state ,...payload};
  },
};