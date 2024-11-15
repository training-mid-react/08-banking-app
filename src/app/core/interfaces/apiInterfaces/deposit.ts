import { DinError, DinHeader } from "../request";

export type DinDepositBody = {
  cuentaOrigen: string,
  cuentaDestino: string,
  monto: number,
  customer: string
};

export type DepositRequest = {
  dinHeader: DinHeader;
  dinBody: DinDepositBody;
};

export type DepositResponse = {
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