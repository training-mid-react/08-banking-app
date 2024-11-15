import { globalBalanceActions } from ".";

export interface ISetGlobalBalanceResponse {
  type: string;
  payload?: string | number;
}

export const setGlobalBalance = (
  balance?: number | string
): ISetGlobalBalanceResponse => ({
  type: globalBalanceActions.SET_BALANCE,
  payload: balance,
});
