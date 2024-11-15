import { localStorageProperties } from "@core/constants";
import { useGetAccounts } from "@core/hooks/accounts";
import {
  IDepositToExternalAccountRequest,
  IUnidirectionalTransaction,
} from "@core/interfaces";
import { atmDeposit, branchDeposits, externalDeposits } from "@core/services";
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
  const { accounts } = useGetAccounts();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<DepositFormData>();

  const { mutate: mutateBranchDeposits } = useMutation({
    mutationFn: async (data: IUnidirectionalTransaction) =>
      await branchDeposits(data),
    onSuccess: (data) => {
      if (data.dinBody) toast("Deposito realizado exitosamente");
      else toast(data.dinError.detail);
    },
    onError: () => toast("Cuentas no cargadas "),
  });

  const { mutate: mutateAtmDeposit } = useMutation({
    mutationFn: async (data: IUnidirectionalTransaction) =>
      await atmDeposit(data),
    onSuccess: (data) => {
      if (data.dinBody) toast("Deposito en cajero realizado exitosamente");
      else toast(data.dinError.detail);
    },
    onError: () => toast("Cuentas no cargadas "),
  });

  const { mutate: mutateExternalDeposits } = useMutation({
    mutationFn: async (data: IDepositToExternalAccountRequest) =>
      await externalDeposits(data),
    onSuccess: (data) => {
      if (data.dinBody) toast("Deposito externo realizado exitosamente");
      else toast(data.dinError.detail);
    },
    onError: (error) => {
      console.log({ error });
      toast("Cuentas no cargadas ");
    },
  });

  const onSubmit = (data: DepositFormData) => {
    const { amount, accountId, accountNumberToDeposit } = data;
    const customerId = String(
      localStorage.getItem(localStorageProperties.customerId)
    );

    switch (data.depositSource) {
      case "branch-deposit":
        mutateBranchDeposits({
          customerId,
          accountId,
          amount,
        });

        break;
      case "atm":
        mutateAtmDeposit({
          customerId,
          accountId,
          amount,
        });
        break;
      case "account":
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
  };

  return { accounts, errors, watch, handleSubmit, register, onSubmit };
};

export default useDeposit;
