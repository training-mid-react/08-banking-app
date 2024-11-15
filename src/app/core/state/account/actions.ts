import { Account, BankAccountCreateRequest, BankAccountGetRequest, BankAccountDeleteRequest, BankAccountCustomerGetRequest } from '@interfaces/account';

export const accountActions = {
  CREATE_BANK_ACCOUNT_REQUEST: 'CREATE_BANK_ACCOUNT_REQUEST',
  CREATE_BANK_ACCOUNT_SUCCESS: 'CREATE_BANK_ACCOUNT_SUCCESS',
  CREATE_BANK_ACCOUNT_FAILURE: 'CREATE_BANK_ACCOUNT_FAILURE',
  
  FETCH_BANK_ACCOUNT_REQUEST: 'FETCH_BANK_ACCOUNT_REQUEST',
  FETCH_BANK_ACCOUNT_SUCCESS: 'FETCH_BANK_ACCOUNT_SUCCESS',
  FETCH_BANK_ACCOUNT_FAILURE: 'FETCH_BANK_ACCOUNT_FAILURE',
  
  DELETE_BANK_ACCOUNT_REQUEST: 'DELETE_BANK_ACCOUNT_REQUEST',
  DELETE_BANK_ACCOUNT_SUCCESS: 'DELETE_BANK_ACCOUNT_SUCCESS',
  DELETE_BANK_ACCOUNT_FAILURE: 'DELETE_BANK_ACCOUNT_FAILURE',
  
  FETCH_CUSTOMER_ACCOUNTS_REQUEST: 'FETCH_CUSTOMER_ACCOUNTS_REQUEST',
  FETCH_CUSTOMER_ACCOUNTS_SUCCESS: 'FETCH_CUSTOMER_ACCOUNTS_SUCCESS',
  FETCH_CUSTOMER_ACCOUNTS_FAILURE: 'FETCH_CUSTOMER_ACCOUNTS_FAILURE',
};

export const createBankAccountRequest = (payload: BankAccountCreateRequest) => ({
  type: accountActions.CREATE_BANK_ACCOUNT_REQUEST,
  payload,
});

export const createBankAccountSuccess = (account: Account) => ({
  type: accountActions.CREATE_BANK_ACCOUNT_SUCCESS,
  payload: account,
});

export const createBankAccountFailure = (error: string) => ({
  type: accountActions.CREATE_BANK_ACCOUNT_FAILURE,
  payload: error,
});

export const fetchBankAccountRequest = (payload: BankAccountGetRequest) => ({
  type: accountActions.FETCH_BANK_ACCOUNT_REQUEST,
  payload,
});

export const fetchBankAccountSuccess = (account: Account) => ({
  type: accountActions.FETCH_BANK_ACCOUNT_SUCCESS,
  payload: account,
});

export const fetchBankAccountFailure = (error: string) => ({
  type: accountActions.FETCH_BANK_ACCOUNT_FAILURE,
  payload: error,
});

export const deleteBankAccountRequest = (payload: BankAccountDeleteRequest) => ({
  type: accountActions.DELETE_BANK_ACCOUNT_REQUEST,
  payload,
});

export const deleteBankAccountSuccess = (account: Account) => ({
  type: accountActions.DELETE_BANK_ACCOUNT_SUCCESS,
  payload: account,
});

export const deleteBankAccountFailure = (error: string) => ({
  type: accountActions.DELETE_BANK_ACCOUNT_FAILURE,
  payload: error,
});

export const fetchCustomerAccountsRequest = (payload: BankAccountCustomerGetRequest) => ({
  type: accountActions.FETCH_CUSTOMER_ACCOUNTS_REQUEST,
  payload,
});

export const fetchCustomerAccountsSuccess = (account: Account) => ({
  type: accountActions.FETCH_CUSTOMER_ACCOUNTS_SUCCESS,
  payload: account,
});

export const fetchCustomerAccountsFailure = (error: string) => ({
  type: accountActions.FETCH_CUSTOMER_ACCOUNTS_FAILURE,
  payload: error,
});