import { useContext, useEffect } from "react";
import { UserContext } from "../state/UserContext";
import { fetchAccounts, updateBalance } from "../state/user/actions";
import { depositFromATM } from "../services/user/depositFromATM.service";
import { withdrawalFromATM } from "../services/user/withdrawalFromATM.service";
import { AuthContext } from "../state/AuthContext";
import { depositFromBranch } from "../services/user/depositFromBranch.service";
import { depositFromExternal } from "../services/user/depositFromExternal.service";
import { purchaseInStore } from "../services/user/purchaseInStore.service";
import { purchaseInWeb } from "../services/user/purchaseInWeb.service";

export type UserContextType = {
  balance: number;
  accountNumber: string;
  customer: string;
  ATMDepositFunction: (amount: number, destinationAccount: string) => Promise<boolean>;
  ATMWithdrawalFunction: (amount: number) => Promise<boolean>;
  BranchDepositFunction: (amount: number, destinationAccount: string) => Promise<boolean>;
  ExternalDepositFunction: (amount: number, destinationAccount: string) => Promise<boolean>;
  PurchaseInStoreFunction: (amount: number) => Promise<boolean>;
  PurchaseInWebFunction: (amount: number) => Promise<boolean>;
};

export const useUser = (): UserContextType => {
  const { state: userState, dispatch } = useContext(UserContext);
  const { state: authState } = useContext(AuthContext);
  const { token } = authState;
  const { balance, accountNumber, customer } = userState;

  useEffect(() => {
    const cuenta1 = localStorage.getItem('cuenta1');
    if(cuenta1) {
      const cuenta = JSON.parse(cuenta1);
      dispatch(fetchAccounts(cuenta));
    }
  }, []);

  const ATMDepositFunction = async (amount: number, destinationAccount: string) => {
    const response = depositFromATM(amount, accountNumber, customer, destinationAccount, token).then((response) => {
      const { dinBody } = response;
      const { saldoActual } = dinBody;
      
      if(saldoActual) {
        dispatch(updateBalance(saldoActual));
        return true;
      }
      return false;
    }).catch((error) => {
      throw new Error('Error: ' + error);
    });
    return response;
  }

  const ATMWithdrawalFunction = async (amount: number) => {
    const response = withdrawalFromATM(amount, accountNumber, customer, token).then((response) => {
      const { dinBody } = response;
      const { saldoActual } = dinBody;
      
      if(saldoActual) {
        dispatch(updateBalance(saldoActual));
        return true;
      }
      return false;
    }).catch((error) => {
      throw new Error('Error: ' + error);
    });
    return response;
  }

  const BranchDepositFunction = async (amount: number, destinationAccount: string) => {
    const response = depositFromBranch(amount, accountNumber, customer, destinationAccount, token).then((response) => {
      const { dinBody } = response;
      const { saldoActual } = dinBody;
      
      if(saldoActual) {
        dispatch(updateBalance(saldoActual));
        return true;
      }
      return false;
    }).catch((error) => {
      throw new Error('Error: ' + error);
    });
    return response;
  }

  const ExternalDepositFunction = async (amount: number, destinationAccount: string) => {
    const response = depositFromExternal(amount, accountNumber, customer, destinationAccount, token).then((response) => {
      const { dinBody } = response;
      const { saldoActual } = dinBody;
      
      if(saldoActual) {
        dispatch(updateBalance(saldoActual));
        return true;
      }
      return false;
    }).catch((error) => {
      throw new Error('Error: ' + error);
    });
    return response;
  }

  const PurchaseInStoreFunction = async (amount: number) => {
    const response = purchaseInStore(amount, accountNumber, customer, token).then((response) => {
      const { dinBody } = response;
      const { saldoActual } = dinBody;
      
      if(saldoActual) {
        dispatch(updateBalance(saldoActual));
        return true;
      }
      return false;
    }).catch((error) => {
      throw new Error('Error: ' + error);
    });
    return response;
  }

  const PurchaseInWebFunction = async (amount: number) => {
    const response = purchaseInWeb(amount, accountNumber, customer, token).then((response) => {
      const { dinBody } = response;
      const { saldoActual } = dinBody;
      
      if(saldoActual) {
        dispatch(updateBalance(saldoActual));
        return true;
      }
      return false;
    }).catch((error) => {
      throw new Error('Error: ' + error);
    });
    return response;
  }
  

  return {
    balance,
    accountNumber, 
    customer,
    ATMDepositFunction, 
    BranchDepositFunction, 
    ExternalDepositFunction, 
    PurchaseInStoreFunction,
    PurchaseInWebFunction,
    ATMWithdrawalFunction, 
  };
};
