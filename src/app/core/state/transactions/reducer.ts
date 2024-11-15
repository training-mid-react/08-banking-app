import { TransactionResponse } from '@interfaces/transaction';
import { transactionActions } from './actions';

interface TransactionState {
  transaction: TransactionResponse | null;
  loading: boolean;
  error: string | null;
}

export const transactionInitialState: TransactionState = {
  transaction: null,
  loading: false,
  error: null,
};

export const transactionCases = {
  [transactionActions.CREATE_WITHDRAW_REQUEST]: (state: TransactionState) => ({ ...state, loading: true, error: null }),
  [transactionActions.CREATE_WITHDRAW_SUCCESS]: (state: TransactionState, payload: TransactionResponse) => ({ ...state, loading: false, transaction: payload, error: null }),
  [transactionActions.CREATE_WITHDRAW_FAILURE]: (state: TransactionState, payload: string) => ({ ...state, loading: false, error: payload }),
  [transactionActions.CREATE_DEPOSIT_REQUEST]: (state: TransactionState) => ({ ...state, loading: true, error: null }),
  [transactionActions.CREATE_DEPOSIT_SUCCESS]: (state: TransactionState, payload: TransactionResponse) => ({ ...state, loading: false, transaction: payload, error: null }),
  [transactionActions.CREATE_DEPOSIT_FAILURE]: (state: TransactionState, payload: string) => ({ ...state, loading: false, error: payload }),
  [transactionActions.CREATE_PURCHASE_CARD_REQUEST]: (state: TransactionState) => ({ ...state, loading: true, error: null }),
  [transactionActions.CREATE_PURCHASE_CARD_SUCCESS]: (state: TransactionState, payload: TransactionResponse) => ({ ...state, loading: false, transaction: payload, error: null }),    
  [transactionActions.CREATE_PURCHASE_CARD_FAILURE]: (state: TransactionState, payload: string) => ({ ...state, loading: false, error: payload }), 
};

