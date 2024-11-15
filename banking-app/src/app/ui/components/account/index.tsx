import { useCreateBankAccount } from "@core/hooks";
import React from "react";
import { Toaster } from "react-hot-toast";

export const CreateBankAccount: React.FC = () => {
  const { accounts, errors, handleSubmit, register, onSubmit } =
    useCreateBankAccount();

  return (
    <div>
      <h2>Crear Cuenta Bancaria</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="accountType">Tipo de Cuenta</label>
          <select
            id="accountType"
            {...register("accountType", {
              required: "Selecciona un tipo de cuenta",
            })}
          >
            <option key={1} value="">
              Selecciona el tipo de cuenta
            </option>
            <option key={2} value="corriente">
              Corriente
            </option>
          </select>

          {errors.accountType && <span>{errors.accountType.message}</span>}
        </div>

        <div>
          <label htmlFor="initialBalance">Saldo Inicial ($)</label>
          <input
            type="number"
            id="initialBalance"
            placeholder="Saldo inicial"
            min={0}
            {...register("initialBalance", {
              required: "El saldo inicial es obligatorio",
              min: {
                value: 0,
                message: "El saldo inicial no puede ser negativo",
              },
            })}
          />
          {errors.initialBalance && (
            <span>{errors.initialBalance.message}</span>
          )}
        </div>
        {accounts.map((a) => (
          <>
            <div>Cuenta: {a.encryptedNumber}</div>
            <div>Monto de la cuenta: {a.amount}</div>
          </>
        ))}
        <button type="submit">Crear Cuenta</button>
      </form>
      <Toaster />
    </div>
  );
};
