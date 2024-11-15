import { useMutation } from "@tanstack/react-query";
import { atmWithdraw } from "@core/services";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { decryptAES } from "@core/utils";
import { useGetAccounts } from "@core/hooks";

export const WithdrawDashboard = () => {
  const { accounts } = useGetAccounts();
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

  return (
    <div className="withdraw">
      <h2>Realizar retiro</h2>
      <form id="withdraw-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="number"
            id="withdraw-amount"
            placeholder="Monto a retirar"
            {...register("amount", {
              required: "El monto es obligatorio.",
              min: {
                value: 0,
                message: "El monto debe ser mayor que 0.",
              },
            })}
          />
          {errors.amount && (
            <span className="error-text">{errors.amount.message}</span>
          )}
          <>
            <label htmlFor="account-number-to-deposit">
              Selecciona la cuenta a depositar:
            </label>
            <select
              id="account-number-to-deposit"
              {...register("accountNumberToWithdraw", {
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

            {errors.accountNumberToWithdraw && (
              <span>{errors.accountNumberToWithdraw.message}</span>
            )}
          </>
        </div>

        <button type="submit">Retirar</button>
      </form>
      <p>El retiro en cajero tiene un costo de $1 USD por transacción.</p>
      <Toaster />
    </div>
  );
};
