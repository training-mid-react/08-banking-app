import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import "./styles.scss";
import { onlinePurchase, phisicalPurchase } from "@core/services";
import { useMutation } from "@tanstack/react-query";
import { IUnidirectionalTransaction } from "@core/interfaces";
import { useGetAccounts } from "@core/hooks";
import { decryptAES } from "@core/utils";
export const PurchaseDashboard = () => {
  const { accounts } = useGetAccounts();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    purchaseType: string;
    purchaseAmount: number;
    accountId: string;
  }>();

  const { mutate: mutatePhisicalPurchase } = useMutation({
    mutationFn: async (data: IUnidirectionalTransaction) =>
      await phisicalPurchase(data),
    onSuccess: (data) => {
      if (data.dinBody) toast("Compra realizada exitosamente");
      else toast(data.dinError.detail);
    },
    onError: () => toast("Cuentas no cargadas "),
  });

  const { mutate: mutateOnlinePurchase } = useMutation({
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
    const customerId = String(localStorage.getItem("customerId"));
    switch (purchaseType) {
      case "physical":
        mutatePhisicalPurchase({
          customerId,
          accountId,
          amount: purchaseAmount,
        });

        break;
      case "online":
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
  };

  return (
    <div className="purchase">
      <h2>Realizar compra</h2>
      <form id="purchase-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="purchase-type">Selecciona el tipo de compra:</label>
          <select
            id="purchase-type"
            {...register("purchaseType", {
              required: "Por favor selecciona un tipo de compra",
            })}
          >
            <option value="physical">
              Compra en establecimiento físico (Sin costo)
            </option>
            <option value="online">
              Compra en línea (Costo de seguro de $5 USD)
            </option>
          </select>
          {errors.purchaseType && (
            <span className="error-text">{errors.purchaseType.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="account-number-to-deposit">
            Selecciona la cuenta a depositar:
          </label>
          <select
            id="account-number-to-deposit"
            {...register("accountId", {
              required: "La cuenta bancaria a depositar es obligatorio",
            })}
            required
          >
            <option value="">Elige una cuenta</option>
            {accounts.map((a) => (
              <option key={a.accountId} value={a.accountId}>
                Cuenta: {decryptAES(a.encryptedNumber)} - Monto: {a.amount}
              </option>
            ))}
          </select>

          {errors.accountId && <span>{errors.accountId.message}</span>}
        </div>
        <div className="form-group">
          <input
            type="number"
            id="purchase-amount"
            placeholder="Monto de la compra"
            {...register("purchaseAmount", {
              required: "El monto es obligatorio",
              min: {
                value: 1,
                message: "El monto debe ser mayor que $0",
              },
            })}
          />
          {errors.purchaseAmount && (
            <span className="error-text">{errors.purchaseAmount.message}</span>
          )}
        </div>

        <button type="submit">Comprar</button>
      </form>

      <Toaster />
    </div>
  );
};
