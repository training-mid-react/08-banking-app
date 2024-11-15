import { useDeposit } from "@core/hooks";
import { decryptAES } from "@core/utils";
import { Toaster } from "react-hot-toast";

export const DepositDashboard = () => {
  const { accounts, errors, watch, handleSubmit, register, onSubmit } =
    useDeposit();

  const isAccountSelected = watch("depositSource") === "account";
  return (
    <div className="deposit">
      <h2>Realizar depósito</h2>
      <form id="deposit-form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="deposit-source">
          Selecciona el origen del depósito:
        </label>
        <select
          id="deposit-source"
          {...register("depositSource", {
            required: "El monto a depositar es obligatorio",
          })}
        >
          <option value="branch-deposit" defaultValue="branch-deposit">
            Depósito desde sucursal (Sin costo)
          </option>
          <option value="atm">
            Depósito desde cajero automático ($2 de costo)
          </option>
          <option value="account">
            Depósito desde otra cuenta ($1.5 de costo)
          </option>
        </select>
        {errors.depositSource && <span>{errors.depositSource.message}</span>}
        <input
          type="number"
          id="deposit-amount"
          placeholder="Monto a depositar"
          required
          min={0}
          {...register("amount", {
            required: "El monto a depositar es obligatorio",
            min: {
              value: 1,
              message: "El monto a depositar debe ser mayor a 0",
            },
          })}
        />
        {errors.amount && <span>{errors.amount.message}</span>}

        <div>
          <label htmlFor="accountId">Cuenta a depositar:</label>
          <select
            id="accountId"
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

          {errors.accountNumberToDeposit && (
            <span>{errors.accountNumberToDeposit.message}</span>
          )}
        </div>

        {isAccountSelected && (
          <>
            <label htmlFor="account-number-to-deposit">
              Selecciona la cuenta a depositar:
            </label>
            <select
              id="account-number-to-deposit"
              {...register("accountNumberToDeposit", {
                required: "La cuenta bancaria a depositar es obligatorio",
              })}
              required
            >
              <option value="">Elige una cuenta</option>
              {accounts.map((a) => (
                <option key={a.accountId} value={a.encryptedNumber}>
                  Cuenta: {decryptAES(a.encryptedNumber)} - Monto: {a.amount}
                </option>
              ))}
            </select>

            {errors.accountNumberToDeposit && (
              <span>{errors.accountNumberToDeposit.message}</span>
            )}
          </>
        )}

        <button type="submit">Depositar</button>
      </form>
      <p>Nota: El costo de la transacción se deducirá del saldo.</p>
      <Toaster />
    </div>
  );
};
