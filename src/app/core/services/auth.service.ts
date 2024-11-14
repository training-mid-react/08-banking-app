import { HTTP_METHODS } from '../constants/httpMethods';
import { AuthCreateRequest, AuthResponse } from '@interfaces/auth';
import { http } from './generals/http';

const API_URL = import.meta.env.VITE_API_URL;
const SECREY_KEY = import.meta.env.VITE_SECRET_KEY;
const INITIALIZATION_VECTOR = import.meta.env.VITE_INITIALIZATION_VECTOR;

const buildPayload = (request: AuthCreateRequest) => {
  return {
    dinHeader: {
      device: request.dinHeader.device || '',
      language: request.dinHeader.language || '',
      uuid: request.dinHeader.uuid || '',
      ip: request.dinHeader.ip || '',
      transactionTime: new Date().toISOString(),
      symmetricKey: SECREY_KEY,
      initializationVector: INITIALIZATION_VECTOR,
    },
    dinBody: {
      username: request.dinBody.username,
      password: request.dinBody.password,
    },
  };
};

export const login = async (request: AuthCreateRequest): Promise<AuthResponse> => {
  const payload = buildPayload(request);

  try {
    const response = await http(`${API_URL}/auth/v1/login`, HTTP_METHODS.POST, payload);
    return response
  } catch (error: any) {
    return error;
  }
};

export const register = async (request: AuthCreateRequest): Promise<AuthResponse> => {
  const payload = buildPayload(request);

  try {
    const response = await http(`${API_URL}/auth/v1/register`, HTTP_METHODS.POST, payload);
    return response
  } catch (error: any) {
    return error;
  }
};
