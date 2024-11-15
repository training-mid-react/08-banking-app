import { userCases } from ".";
import { IAction } from "../../interfaces/state";
import { Account } from "../../interfaces/user";

export const userInitialState: Account = {
  accountNumber: '111111111',//'1N8fQLoWcXrXFUzlFNVDfg==',
  balance: 0,
  customer: "yoder",
};

export interface IUserState extends Account {
}

export interface IContext {
  state: IUserState;
  dispatch: React.Dispatch<IAction>;
}

export const reducer = (state: IUserState, action: IAction) => {
  const cases = { ...userCases };
  return cases[action.type](state, action.payload) || state;
};