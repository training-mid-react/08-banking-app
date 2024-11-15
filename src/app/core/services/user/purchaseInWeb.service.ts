import { HTTP_METHODS } from "../../constants/httpMethods";
import { urlResources } from "../../constants/urlResources";
import { PurchaseRequest } from "../../interfaces/apiInterfaces/purchase";
import { encryptAES, llaveSimetrica, vectorInicializacion } from "../../utils/crypto";
import { handleTryCatch } from "../../utils/handleTryCatch";
import { http } from "../generals/http";

export const purchaseInWeb = async (amount: number, accountNumber: string, customer: string, token: string): Promise<any> => {
  const encryptedAccountNumber = await encryptAES(accountNumber);
  const encryptedCustomer = await encryptAES(customer);
  
  const dinHeader = {
    dispositivo: "PC",
    idioma: "en",
    uuid: "1",
    ip: "127.0.0.1",
    horaTransaccion: new Date().toISOString(),
    llaveSimetrica: llaveSimetrica,
    vectorInicializacion: vectorInicializacion,
  };

  const depositRequest: PurchaseRequest = {
    dinHeader,
    dinBody: {
      monto: Number(amount),
      cuentaOrigen: encryptedAccountNumber,
      customer: encryptedCustomer,
    },
  };

  const [data, error] = await handleTryCatch(http<PurchaseRequest, PurchaseRequest>({
    method: HTTP_METHODS.POST,
    url: urlResources.purchaseInWeb(),
    data: depositRequest,
    token: token,
  }));

  return data?.data ? data.data : error;
};