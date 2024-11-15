import { localStorageProperties } from "@core/constants";
import { useGetAccounts } from "@core/hooks/accounts";
import { createCustomerAccount } from "@core/services";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface ICreateBankAccount {
  accountType: string;
  initialBalance: number;
}

export const useCreateBankAccount = () => {
  const { accounts } = useGetAccounts();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateBankAccount>();

  const { mutate } = useMutation({
    mutationFn: createCustomerAccount,
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
  };

  return { accounts, errors, handleSubmit, register, onSubmit };
};
