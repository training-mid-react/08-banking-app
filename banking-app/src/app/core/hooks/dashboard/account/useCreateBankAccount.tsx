import { localStorageProperties } from "@core/constants";
import { useAccountContext } from "@core/state/context/account/AccountContext";
import { createCustomerAccount } from "@core/services";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ICreateCustomerAccountRequest } from "@core/interfaces";

interface ICreateBankAccount {
  accountType: string;
  initialBalance: number;
}

export const useCreateBankAccount = () => {
  const { accounts, refetchAccounts } = useAccountContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateBankAccount>();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: ICreateCustomerAccountRequest) =>
      createCustomerAccount(data),
    onSuccess: (data) => {
      if (data.dinBody) {
        localStorage.setItem(
          localStorageProperties.accountId,
          String(data?.dinBody?.accountId)
        );
        toast("¡Cuenta bancaria creada exitosamente!");
      } else {
        toast(data.dinError.detail);
      }
    },
    onError: () => toast("Ha ocurrido un error "),
  });

  const onSubmit = (data: ICreateBankAccount) => {
    if (data.initialBalance < 0) {
      toast("¡El balance debe de ser mayor a 0!");
      return;
    }

    mutate({
      customerId: String(
        localStorage.getItem(localStorageProperties.customerId)
      ),
      amount: data.initialBalance,
    });
    refetchAccounts();
  };

  return {
    isLoading: isPending,
    accounts,
    errors,
    handleSubmit,
    register,
    onSubmit,
  };
};
