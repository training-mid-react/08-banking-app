import { Account } from '@interfaces/account';
import { accountActions } from './actions';

interface AccountState {
  account: Account | null;
  loading: boolean;
  error: string | null;
}

export const accountInitialState: AccountState = {
  account: null,
  loading: false,
  error: null,
};

export const accountCases = {
  [accountActions.FETCH_ACCOUNT_BALANCE_REQUEST]: (state: AccountState) => ({ ...state, loading: true, error: null }),
  [accountActions.FETCH_ACCOUNT_BALANCE_SUCCESS]: (state: AccountState, payload: Account) => ({ ...state, loading: false, account: payload }),
  [accountActions.FETCH_ACCOUNT_BALANCE_FAILURE]: (state: AccountState, payload: string) => ({ ...state, loading: false, error: payload }),
  [accountActions.UPDATE_ACCOUNT_BALANCE_REQUEST]: (state: AccountState, payload: Partial<Account>) => ({ ...state, account: { ...state.account, ...payload } }),
  [accountActions.UPDATE_ACCOUNT_BALANCE_SUCCESS]: (state: AccountState, payload: Account) => ({ ...state, account: payload }),
  [accountActions.UPDATE_ACCOUNT_BALANCE_FAILURE]: (state: AccountState, payload: string) => ({ ...state, error: payload }),
};
