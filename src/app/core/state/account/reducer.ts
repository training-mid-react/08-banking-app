import { Account } from '@interfaces/account';
import { accountActions } from './actions';

interface AccountState {
  accounts: Account[];
  selectedAccount: Account | null;
  loading: boolean;
  error: string | null;
}

export const accountInitialState: AccountState = {
  accounts: [],
  selectedAccount: null,
  loading: false,
  error: null,
};

export const accountCases = {
  [accountActions.CREATE_BANK_ACCOUNT_REQUEST]: (state: AccountState) => ({ ...state, loading: true }),
  [accountActions.CREATE_BANK_ACCOUNT_SUCCESS]: (state: AccountState, payload: Account) => ({
    ...state,
    loading: false,
    accounts: [...state.accounts, payload],
  }),
  [accountActions.CREATE_BANK_ACCOUNT_FAILURE]: (state: AccountState, payload: string) => ({ ...state, loading: false, error: payload }),

  [accountActions.FETCH_BANK_ACCOUNT_REQUEST]: (state: AccountState) => ({ ...state, loading: true }),
  [accountActions.FETCH_BANK_ACCOUNT_SUCCESS]: (state: AccountState, payload: Account) => ({
    ...state,
    loading: false,
    selectedAccount: payload,
  }),
  [accountActions.FETCH_BANK_ACCOUNT_FAILURE]: (state: AccountState, payload: string) => ({ ...state, loading: false, error: payload }),
  [accountActions.DELETE_BANK_ACCOUNT_REQUEST]: (state: AccountState) => ({ ...state, loading: true }),
  [accountActions.DELETE_BANK_ACCOUNT_SUCCESS]: (state: AccountState, payload: Account) => ({
    ...state,
    loading: false,
    accounts: state.accounts.filter((account) => account.id !== payload.id),
  }),
  [accountActions.DELETE_BANK_ACCOUNT_FAILURE]: (state: AccountState, payload: string) => ({ ...state, loading: false, error: payload }),

  [accountActions.FETCH_CUSTOMER_ACCOUNTS_REQUEST]: (state: AccountState) => ({ ...state, loading: true }),
  [accountActions.FETCH_CUSTOMER_ACCOUNTS_SUCCESS]: (state: AccountState, payload: Account) => ({
    ...state,
    loading: false,
    accounts: payload,
  }),
  [accountActions.FETCH_CUSTOMER_ACCOUNTS_FAILURE]: (state: AccountState, payload: string) => ({ ...state, loading: false, error: payload }),
};
