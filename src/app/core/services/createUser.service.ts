import { HTTP_METHODS } from "../constants/httpMethods";
import { urlResources } from "../constants/urlResources";
import { SignUpRequest, SignUpResponse } from "../interfaces/signup";
import { ROLES } from "../interfaces/user";
import { llaveSimetrica, vectorInicializacion } from "../utils/crypto";
import { handleTryCatch } from "../utils/handleTryCatch";
import { http } from "./generals/http";
import { v4 as uuidv4 } from 'uuid';

export const createUser = async (username: string, password: string, token: string): Promise<any> => {
  const dinHeader = {
    dispositivo: "PC",
    idioma: "en",
    uuid: uuidv4(),
    ip: "127.0.0.1",
    horaTransaccion: new Date().toISOString(),
    llaveSimetrica: llaveSimetrica,
    vectorInicializacion: vectorInicializacion,
  };

  const signUpRequest: SignUpRequest = {
    dinHeader,
    dinBody: {
      username,
      password,
      roles: [ROLES.USER],
      customerId: 1,
    },
  };
  const [data, error] = await handleTryCatch(http<SignUpRequest ,SignUpResponse>({
    method: HTTP_METHODS.POST,
    url: urlResources.createUser(),
    data: signUpRequest,
    token: token,
  }));

  return data?.data ? data.data : error;
  
}