import { adminCases } from ".";
import { IAction } from "../../interfaces/state";

export interface AdminR {
  someVariable: string;
}

export const adminInitialState: AdminR = {
  someVariable: 'someValue',
};

export interface IAdminState extends AdminR{
  
};

export interface IContext {
  state: IAdminState;
  dispatch: React.Dispatch<IAction>;
}

export const reducer = (state: IAdminState, action: IAction) => {
  const cases = { ...adminCases };
  return cases[action.type](state, action.payload) || state;
};