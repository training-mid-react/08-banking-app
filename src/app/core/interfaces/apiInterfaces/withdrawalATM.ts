import { DinError, DinHeader } from "../request";

export type DinATMWithdrawalBody = {
  cuentaOrigen: string,
  monto: number,
  customer: string
};

export type ATMWithdrawalRequest = {
  dinHeader: DinHeader;
  dinBody: DinATMWithdrawalBody;
};

export type ATMWithdrawalResponse = {
  dinHeader: DinHeader;
  dinBody: {
    cuentaOrigen: string,
    saldoActual: number,
    detalle: {
      montoDeposito: number,
      costoDeposito: number,
      tipoDeposito: string,
      cuentaOrigen: string,
      fechaTransaccion: string
    }
  };
  dinError: DinError;
};