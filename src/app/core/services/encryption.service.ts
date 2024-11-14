import { HTTP_METHODS } from '@core/constants/httpMethods';
import { EncryptionRequest, EncryptionResponse } from '@interfaces/encryption';
import { http } from './generals/http';

const API_URL = process.env.VITE_API_URL;
const SECREY_KEY = process.env.VITE_SECRET_KEY;
const INITIALIZATION_VECTOR = process.env.VITE_INITIALIZATION_VECTOR;

export const encryptData = async (request: EncryptionRequest): Promise<EncryptionResponse> => {
  const payload = {
    dinHeader: {
      device: request.dinHeader.device,
      language: request.dinHeader.language,
      uuid: request.dinHeader.uuid,
      ip: request.dinHeader.ip,
      transactionTime: new Date().toISOString(),
      symmetricKey: SECREY_KEY,
      initializationVector: INITIALIZATION_VECTOR,
    },
    dinBody: request.dinBody,
  };

  try {
    const response = await http(`${API_URL}/api/v1/public/encryption/encrypt`, HTTP_METHODS.POST, payload)
    return response.json();
  } catch (error: any) {
    return error
  }
};
