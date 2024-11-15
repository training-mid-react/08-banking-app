import { Account } from "../../interfaces/user";

export const userActions = {
  DEPOSIT_FROM_BRANCH: 'DEPOSIT_FROM_BRANCH',
  DEPOSIT_FROM_ATM: 'DEPOSIT_FROM_ATM',
  DEPOSIT_FROM_ANOTHER_ACCOUNT: 'DEPOSIT_FROM_ANOTHER_ACCOUNT',
  PURCHASE_IN_STORE: 'PURCHASE_IN_STORE',
  PURCHASE_ON_WEBSITE: 'PURCHASE_ON_WEBSITE',
  WITHDRAW_FROM_ATM: 'WITHDRAW_FROM_ATM',
  UPDATE_BALANCE: 'UPDATE_BALANCE',
  FETCH_ACCOUNTS: 'FETCH_ACCOUNTS',
};

export const updateBalance = (newBalance: number) => ({
  type: userActions.UPDATE_BALANCE,
  payload: newBalance,
});

export const fetchAccounts = (newAccount: Account) => ({
  type: userActions.FETCH_ACCOUNTS,
  payload: newAccount,
});