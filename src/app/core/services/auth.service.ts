import { HTTP_METHODS } from '../constants/httpMethods';
import { AuthCreateRequest, AuthResponse, RegisterCreateRequest } from '@interfaces/auth';
import { http } from './generals/http';

const API_URL = import.meta.env.VITE_API_URL;
const SECREY_KEY = import.meta.env.VITE_SECRET_KEY;
const INITIALIZATION_VECTOR = import.meta.env.VITE_INITIALIZATION_VECTOR;

export const login = async (request: AuthCreateRequest, token?: string): Promise<AuthResponse> => {
  const payload = {
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
  }
  return await http(`${API_URL}/auth/v1/login`, HTTP_METHODS.POST, payload, token);
};

export const register = async (request: RegisterCreateRequest, token?: string): Promise<AuthResponse> => {
  const payload = {
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
      name: request.dinBody.name,
      lastname: request.dinBody.lastname,
      roles: request.dinBody.roles
    },
  }
  return await http(`${API_URL}/auth/v1/register`, HTTP_METHODS.POST, payload, token);
};
