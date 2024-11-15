import { DinError, DinHeader } from "../request";

export type DinPurchaseBody = {
  cuentaOrigen: string,
  monto: number,
  customer: string
};

export type PurchaseRequest = {
  dinHeader: DinHeader;
  dinBody: DinPurchaseBody;
};

export type PurchaseResponse = {
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