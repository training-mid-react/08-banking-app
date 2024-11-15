import { useContext, useCallback } from 'react';
import { createBankAccount, getBankAccount, deleteBankAccount, getCustomerAccounts } from '../services/account.service';
import {
  createBankAccountRequest,
  createBankAccountSuccess,
  createBankAccountFailure,
  fetchBankAccountRequest,
  fetchBankAccountSuccess,
  fetchBankAccountFailure,
  deleteBankAccountRequest,
  deleteBankAccountFailure,
  deleteBankAccountSuccess,
  fetchCustomerAccountsRequest,
  fetchCustomerAccountsSuccess,
  fetchCustomerAccountsFailure
} from '../state/account/actions';
import { AppContext } from '../../core/state/AppContext';

export const useAccount = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleCreateBankAccount = useCallback(async (payload) => {
    dispatch(createBankAccountRequest(payload));
    try {
      const response = await createBankAccount(payload);
      dispatch(createBankAccountSuccess(response));
    } catch (error: any) {
      dispatch(createBankAccountFailure(error.message));
    }
  }, [dispatch]);

  const handleFetchBankAccount = useCallback(async (payload) => {
    dispatch(fetchBankAccountRequest(payload));
    try {
      const response = await getBankAccount(payload);
      dispatch(fetchBankAccountSuccess(response));
    } catch (error: any) {
      dispatch(fetchBankAccountFailure(error.message));
    }
  }, [dispatch]);

  const handleRemoveAccount = useCallback(async (payload) => {
    dispatch(deleteBankAccountRequest(payload));
    try {
      const response = await deleteBankAccount(payload);
      dispatch(deleteBankAccountSuccess(response));
    } catch (error: any) {
      dispatch(deleteBankAccountFailure(error.message));
    } 
  }, [dispatch])

  const handleFetchCustomerAccounts = useCallback(async (payload) => {
    dispatch(fetchCustomerAccountsRequest(payload));
    try {
      const response = await getCustomerAccounts(payload);
  
      if (response.dinBody) {
        dispatch(fetchCustomerAccountsSuccess(response.dinBody));
        return response;
      } else {
        throw new Error('La respuesta no contiene dinBody.');
      }
    } catch (error: any) {
      dispatch(fetchCustomerAccountsFailure(error.message));
      throw error;
    }
  }, [dispatch]);  
  
  return {
    state,
    handleCreateBankAccount,
    handleFetchBankAccount,
    handleRemoveAccount,
    handleFetchCustomerAccounts
  };
};
