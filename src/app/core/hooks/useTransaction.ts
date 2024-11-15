import { useContext, useCallback } from "react";
import { TransactionContext } from "../state/transactions/TransactionContext";
import {
  createWithdrawRequest,
  createWithdrawSuccess,
  createWithdrawFailure,
  createDepositRequest,
  createDepositSuccess,
  createDepositFailure,
  createPurchaseCardRequest,
  createPurchaseCardSuccess,
  createPurchaseCardFailure,
} from "../state/transactions/actions";
import { withdraw, deposit, purchaseCard } from "../services/transaction.service";
import { WithdrawRequest, DepositRequest, PurchaseCardRequest } from "../interfaces/transaction";

export const useTransaction = () => {
  const { state, dispatch } = useContext(TransactionContext)!;

  const handleWithdraw = useCallback(
    async (request: WithdrawRequest) => {
      dispatch(createWithdrawRequest(request));
      try {
        const response = await withdraw(request);
        dispatch(createWithdrawSuccess(response));
      } catch (error: any) {
        dispatch(createWithdrawFailure(error.message));
      }
    },
    [dispatch]
  );

  const handleDeposit = useCallback(
    async (request: DepositRequest) => {
      dispatch(createDepositRequest(request));
      try {
        const response = await deposit(request);
        dispatch(createDepositSuccess(response));
      } catch (error: any) {
        dispatch(createDepositFailure(error.message));
      }
    },
    [dispatch]
  );

  const handlePurchaseCard = useCallback(
    async (request: PurchaseCardRequest) => {
      dispatch(createPurchaseCardRequest(request));
      try {
        const response = await purchaseCard(request);
        dispatch(createPurchaseCardSuccess(response));
      } catch (error: any) {
        dispatch(createPurchaseCardFailure(error.message));
      }
    },
    [dispatch]
  );

  return {
    handleWithdraw,
    handleDeposit,
    handlePurchaseCard,
    state,
  };
};

export default useTransaction;
