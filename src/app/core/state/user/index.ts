import { Account } from "../../interfaces/user";
import { userActions } from "./actions";

export const userCases = {
  [userActions.DEPOSIT_FROM_BRANCH]: (state: Account, payload: { newBalance: number }) => {
    return {
      ...state,
      balance: payload.newBalance,
    };
  },

  [userActions.DEPOSIT_FROM_ATM]: (state: Account, payload: { newBalance: number }) => {
    return {
      ...state,
      balance: payload.newBalance,
    };
  },

  [userActions.DEPOSIT_FROM_ANOTHER_ACCOUNT]: (state: Account, payload: { newBalance: number }) => {
    return {
      ...state,
      balance: payload.newBalance,
    };
  },

  [userActions.PURCHASE_IN_STORE]: (state: Account, payload: { newBalance: number }) => {
    return {
      ...state,
      balance: payload.newBalance,
    };
  },

  [userActions.PURCHASE_ON_WEBSITE]: (state: Account, payload: { newBalance: number }) => {
    return {
      ...state,
      balance: payload.newBalance,
    };
  },

  [userActions.WITHDRAW_FROM_ATM]: (state: Account, payload: { newBalance: number }) => {
    return {
      ...state,
      balance: payload.newBalance,
    };
  },
  [userActions.UPDATE_BALANCE]: (state: Account, payload: number) => {
    return {
      ...state,
      balance: payload,
    };
  },
  [userActions.FETCH_ACCOUNTS]: (state: Account, payload: Account) => {
    console.log('fetchAccounts', payload);
    return {
      ...state,
      ...payload,
    };
  },
};