import { HTTP_METHODS } from "../../constants/httpMethods";
import { urlResources } from "../../constants/urlResources";
import { DepositRequest, DepositResponse } from "../../interfaces/apiInterfaces/deposit";
import { encryptAES, llaveSimetrica, vectorInicializacion } from "../../utils/crypto";
import { handleTryCatch } from "../../utils/handleTryCatch";
import { http } from "../generals/http";

export const depositFromBranch = async (amount: number, accountNumber: string, customer: string, destinationAccount: string, token: string): Promise<any> => {
  const encryptedAccountNumber = await encryptAES(accountNumber);
  const encryptedDestinationAccount = await encryptAES(destinationAccount);
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

  const depositRequest: DepositRequest = {
    dinHeader,
    dinBody: {
      monto: Number(amount),
      cuentaOrigen: encryptedAccountNumber,
      cuentaDestino: encryptedDestinationAccount,
      customer: encryptedCustomer,
    },
  };

  const [data, error] = await handleTryCatch(http<DepositRequest, DepositResponse>({
    method: HTTP_METHODS.POST,
    url: urlResources.depositFromBranch(),
    data: depositRequest,
    token: token,
  }));

  return data?.data ? data.data : error;
};