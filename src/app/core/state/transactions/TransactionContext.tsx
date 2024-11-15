import React, { createContext, useContext, useReducer, ReactNode, Dispatch } from 'react';
import { transactionCases, transactionInitialState } from './reducer';

interface TransactionContextProps {
  state: typeof transactionInitialState;
  dispatch: Dispatch<any>;
}

export const TransactionContext = createContext<TransactionContextProps | undefined>(undefined);

export const TransactionContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    return transactionCases[action.type] ? transactionCases[action.type](state, action.payload) : state;
  }, transactionInitialState);

  return (
    <TransactionContext.Provider value={{ state, dispatch }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactionContext = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error('useTransactionContext must be used within a TransactionContextProvider');
  }
  return context;
};

export default TransactionContext;
