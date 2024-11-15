import { authCases } from ".";
import { User } from "../../interfaces/user";
import { IAction } from "../../interfaces/state";

export const authInitialState: User = {
  username: '',
  role: null,
  token: '',
};

export interface IAuthState extends User {
}

export interface IContext {
  state: IAuthState;
  dispatch: React.Dispatch<IAction>;
}

export const reducer = (state: IAuthState, action: IAction) => {
  const cases = { ...authCases };
  return cases[action.type](state, action.payload) || state;
};