import { Account, UpdateAccountBalance } from "@core/interfaces/account";

export const accountActions = {
  FETCH_ACCOUNT_BALANCE_REQUEST: 'FETCH_ACCOUNT_BALANCE_REQUEST',
  FETCH_ACCOUNT_BALANCE_SUCCESS: 'FETCH_ACCOUNT_BALANCE_SUCCESS',
  FETCH_ACCOUNT_BALANCE_FAILURE: 'FETCH_ACCOUNT_BALANCE_FAILURE',
  UPDATE_ACCOUNT_BALANCE_REQUEST: 'UPDATE_ACCOUNT_BALANCE_REQUEST',
  UPDATE_ACCOUNT_BALANCE_SUCCESS: 'UPDATE_ACCOUNT_BALANCE_SUCCESS',
  UPDATE_ACCOUNT_BALANCE_FAILURE: 'UPDATE_ACCOUNT_BALANCE_FAILURE',
};

export const fetchAccountBalanceRequest = (accountId: string) => ({
  type: accountActions.FETCH_ACCOUNT_BALANCE_REQUEST,
  payload: accountId,
});

export const fetchAccountBalanceSuccess = (account: Account) => ({
  type: accountActions.FETCH_ACCOUNT_BALANCE_SUCCESS,
  payload: account,
});

export const fetchAccountBalanceFailure = (error: string) => ({
  type: accountActions.FETCH_ACCOUNT_BALANCE_FAILURE,
  payload: error,
});

export const updateAccountBalanceRequest = (updateData: UpdateAccountBalance) => ({
  type: accountActions.UPDATE_ACCOUNT_BALANCE_REQUEST,
  payload: updateData,
});

export const updateAccountBalanceSuccess = (account: Account) => ({
  type: accountActions.UPDATE_ACCOUNT_BALANCE_SUCCESS,
  payload: account,
});

export const updateAccountBalanceFailure = (error: string) => ({
  type: accountActions.UPDATE_ACCOUNT_BALANCE_FAILURE,
  payload: error,
});
