import { useMutation } from "@tanstack/react-query";
import { atmWithdraw } from "@core/services";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useAccountContext } from "@core/state";

export const useWithdrawDashboard = () => {
  const { accounts } = useAccountContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ amount: number; accountNumberToWithdraw: string }>();

  const { mutate } = useMutation({
    mutationFn: atmWithdraw,
    onSuccess: (data) => {
      if (data.dinBody) {
        toast("¡Retiro realizado con éxito!");
      } else {
        toast(data.dinError.detail);
      }
    },
    onError: () => toast("Ha ocurrido un error al realizar el retiro."),
  });

  const onSubmit = (data: {
    amount: number;
    accountNumberToWithdraw: string;
  }) => {
    mutate({
      customerId: String(localStorage.getItem("customerId")),
      amount: data.amount,
      accountId: data.accountNumberToWithdraw,
    });
  };

  return { accounts, register, handleSubmit, errors, onSubmit };
};
