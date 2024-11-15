import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAccountContext } from "@core/state";
import { onlinePurchase, phisicalPurchase } from "@core/services";
import { useMutation } from "@tanstack/react-query";
import { IUnidirectionalTransaction } from "@core/interfaces";
import { EPurchaseType } from "@core/types";
import { localStorageProperties } from "@core/constants";

export const usePurchase = () => {
  const { accounts, refetchAccounts } = useAccountContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    purchaseType: string;
    purchaseAmount: number;
    accountId: string;
  }>();

  const { mutate: mutatePhisicalPurchase, isPending: isPedingPhisicalPurchas } =
    useMutation({
      mutationFn: async (data: IUnidirectionalTransaction) =>
        await phisicalPurchase(data),
      onSuccess: (data) => {
        if (data.dinBody) toast("Compra realizada exitosamente");
        else toast(data.dinError.detail);
      },
      onError: () => toast("Cuentas no cargadas "),
    });

  const { mutate: mutateOnlinePurchase, isPending: isPedingOnlinePurchase } =
    useMutation({
      mutationFn: async (data: IUnidirectionalTransaction) =>
        await onlinePurchase(data),
      onSuccess: (data) => {
        if (data.dinBody) toast("Compra online realizada exitosamente");
        else toast(data.dinError.detail);
      },
      onError: () => toast("Cuentas no cargadas "),
    });

  const onSubmit = (data: {
    purchaseType: string;
    purchaseAmount: number;
    accountId: string;
  }) => {
    const { purchaseAmount, purchaseType, accountId } = data;
    const customerId = String(
      localStorage.getItem(localStorageProperties.customerId)
    );
    switch (purchaseType) {
      case EPurchaseType.PHYSICAL:
        mutatePhisicalPurchase({
          customerId,
          accountId,
          amount: purchaseAmount,
        });

        break;
      case EPurchaseType.ONLINE:
        mutateOnlinePurchase({
          customerId,
          accountId,
          amount: purchaseAmount,
        });
        break;

      default:
        toast("Metodo de deposito no valido");
        break;
    }
    refetchAccounts();
  };

  return {
    isLoading: isPedingPhisicalPurchas || isPedingOnlinePurchase,
    accounts,
    register,
    onSubmit,
    handleSubmit,
    errors,
  };
};
