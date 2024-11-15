import { HTTP_METHODS } from "../../constants/httpMethods";
import { urlResources } from "../../constants/urlResources";
import { ATMWithdrawalRequest, ATMWithdrawalResponse } from "../../interfaces/apiInterfaces/withdrawalATM";
import { encryptAES, llaveSimetrica, vectorInicializacion } from "../../utils/crypto";
import { handleTryCatch } from "../../utils/handleTryCatch";
import { http } from "../generals/http";

export const withdrawalFromATM = async (amount: number, accountNumber: string, customer: string, token: string): Promise<any> => {
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

  const depositRequest: ATMWithdrawalRequest = {
    dinHeader,
    dinBody: {
      monto: Number(amount),
      cuentaOrigen: encryptedAccountNumber,
      customer: encryptedCustomer,
    },
  };

  const [data, error] = await handleTryCatch(http<ATMWithdrawalRequest, ATMWithdrawalResponse>({
    method: HTTP_METHODS.POST,
    url: urlResources.withdrawFromATM(),
    data: depositRequest,
    token: token,
  }));

  return data?.data ? data.data : error;
};