import { localStorageProperties } from "@core/constants";
import {
  IDepositToExternalAccountRequest,
  IUnidirectionalTransaction,
} from "@core/interfaces";
import { atmDeposit, branchDeposits, externalDeposits } from "@core/services";
import { useAccountContext } from "@core/state";
import { EDepositSource } from "@core/types";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type DepositOptions = "branch-deposit" | "atm" | "account";
interface DepositFormData {
  depositSource: DepositOptions;
  amount: number;
  accountId: string;
  accountNumberToDeposit?: string;
}

export const useDeposit = () => {
  const { accounts, refetchAccounts } = useAccountContext();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<DepositFormData>();

  const isAccountSelected = watch("depositSource") === EDepositSource.ACCOUNT;

  const { mutate: mutateBranchDeposits, isPending: isPendingBranchDeposits } =
    useMutation({
      mutationFn: async (data: IUnidirectionalTransaction) =>
        await branchDeposits(data),
      onSuccess: (data) => {
        if (data.dinBody) toast("Deposito realizado exitosamente");
        else toast(data.dinError.detail);
      },
      onError: () => toast("Cuentas no cargadas "),
    });

  const { mutate: mutateAtmDeposit, isPending: isPendingAtmDeposit } =
    useMutation({
      mutationFn: async (data: IUnidirectionalTransaction) =>
        await atmDeposit(data),
      onSuccess: (data) => {
        if (data.dinBody) toast("Deposito en cajero realizado exitosamente");
        else toast(data.dinError.detail);
      },
      onError: () => toast("Cuentas no cargadas "),
    });

  const {
    mutate: mutateExternalDeposits,
    isPending: isPendingExternalDeposits,
  } = useMutation({
    mutationFn: async (data: IDepositToExternalAccountRequest) =>
      await externalDeposits(data),
    onSuccess: (data) => {
      if (data.dinBody) toast("Deposito externo realizado exitosamente");
      else toast(data.dinError.detail);
    },
    onError: () => {
      toast("Cuentas no cargadas ");
    },
  });

  const onSubmit = (data: DepositFormData) => {
    const { amount, accountId, accountNumberToDeposit } = data;
    const customerId = String(
      localStorage.getItem(localStorageProperties.customerId)
    );

    switch (data.depositSource) {
      case EDepositSource.BRANCH:
        mutateBranchDeposits({
          customerId,
          accountId,
          amount,
        });

        break;
      case EDepositSource.ATM:
        mutateAtmDeposit({
          customerId,
          accountId,
          amount,
        });
        break;
      case EDepositSource.ACCOUNT:
        if (accountNumberToDeposit)
          mutateExternalDeposits({
            customerId,
            accountId,
            amount,
            encryptedAccountNumberToDeposit: accountNumberToDeposit,
          });

        break;
      default:
        toast("Metodo de deposito no valido");
        break;
    }
    refetchAccounts();
  };

  return {
    isLoading:
      isPendingAtmDeposit ||
      isPendingBranchDeposits ||
      isPendingExternalDeposits,
    isAccountSelected,
    accounts,
    errors,
    watch,
    handleSubmit,
    register,
    onSubmit,
  };
};

export default useDeposit;
