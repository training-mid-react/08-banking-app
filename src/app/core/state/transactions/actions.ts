import { TransactionRequest, TransactionResponse } from "@core/interfaces/transaction";

export const transactionActions = {
  CREATE_WITHDRAW_REQUEST: 'CREATE_WITHDRAW_REQUEST',
  CREATE_WITHDRAW_SUCCESS: 'CREATE_WITHDRAW_SUCCESS',
  CREATE_WITHDRAW_FAILURE: 'CREATE_WITHDRAW_FAILURE',
  CREATE_DEPOSIT_REQUEST: 'CREATE_DEPOSIT_REQUEST',
  CREATE_DEPOSIT_SUCCESS: 'CREATE_DEPOSIT_SUCCESS',
  CREATE_DEPOSIT_FAILURE: 'CREATE_DEPOSIT_FAILURE',
  CREATE_PURCHASE_CARD_REQUEST: 'CREATE_PURCHASE_CARD_REQUEST',
  CREATE_PURCHASE_CARD_SUCCESS: 'CREATE_PURCHASE_CARD_SUCCESS',
  CREATE_PURCHASE_CARD_FAILURE: 'CREATE_PURCHASE_CARD_FAILURE',
}

export const createWithdrawRequest = (transaction: TransactionRequest) => ({
type: transactionActions.CREATE_WITHDRAW_REQUEST,
payload: transaction,
});

export const createWithdrawSuccess = (transaction: TransactionResponse) => ({
type: transactionActions.CREATE_WITHDRAW_SUCCESS,
payload: transaction,
});

export const createWithdrawFailure = (error: string) => ({
type: transactionActions.CREATE_WITHDRAW_FAILURE,
payload: error,
});

export const createDepositRequest = (transaction: TransactionRequest) => ({
type: transactionActions.CREATE_DEPOSIT_REQUEST,
payload: transaction,
});

export const createDepositSuccess = (transaction: TransactionResponse) => ({
type: transactionActions.CREATE_DEPOSIT_SUCCESS,
payload: transaction,
});

export const createDepositFailure = (error: string) => ({
type: transactionActions.CREATE_DEPOSIT_FAILURE,
payload: error,
});

export const createPurchaseCardRequest = (transaction: TransactionRequest) => ({
type: transactionActions.CREATE_PURCHASE_CARD_REQUEST,
payload: transaction,
});

export const createPurchaseCardSuccess = (transaction: TransactionResponse) => ({
type: transactionActions.CREATE_PURCHASE_CARD_SUCCESS,
payload: transaction,
});

export const createPurchaseCardFailure = (error: string) => ({
type: transactionActions.CREATE_PURCHASE_CARD_FAILURE,
payload: error,
});
