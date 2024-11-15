import { globalBalanceActions } from "./globalBalanceActions";
import { IState } from "@core/interfaces";

export const globalBalanceCases = {
  [globalBalanceActions.SET_BALANCE]: (
    state: IState,
    payload?: number | string
  ) => {
    return { ...state, balance: payload };
  },
};
