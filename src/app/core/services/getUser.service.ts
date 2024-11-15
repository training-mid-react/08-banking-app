import { HTTP_METHODS } from "../constants/httpMethods";
import { urlResources } from "../constants/urlResources";
import { LoginRequest, LoginResponse } from "../interfaces/login";
import { llaveSimetrica, vectorInicializacion } from "../utils/crypto";
import { handleTryCatch } from "../utils/handleTryCatch";
import { http } from "./generals/http";

export const getUser = async (username: string, password: string): Promise<any> => {

  const dinHeader = {
    dispositivo: "PC",
    idioma: "en",
    uuid: "1",
    ip: "127.0.0.1",
    horaTransaccion: new Date().toISOString(),
    llaveSimetrica: llaveSimetrica,
    vectorInicializacion: vectorInicializacion,
  };

  const loginRequest: LoginRequest = {
    dinHeader,
    dinBody: {
      username,
      password,
    },
  };

  const [data, error] = await handleTryCatch(http<LoginRequest ,LoginResponse>({
    method: HTTP_METHODS.POST,
    url: urlResources.getUser(),
    data: loginRequest,
  }));

  return data?.data ? data.data : error;
  
}