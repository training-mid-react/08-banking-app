import { CustomerRequest, CustomerCreateRequest, CustomerGetRequest, CustomerDeleteRequest } from '@interfaces/customer';
import { http } from './generals/http';
import { HTTP_METHODS } from '@core/constants/httpMethods';

const API_URL = process.env.VITE_API_URL;
const SECREY_KEY = process.env.VITE_SECRET_KEY;
const INITIALIZATION_VECTOR = process.env.VITE_INITIALIZATION_VECTOR;

const makeCustomerRequest = async (url: string, payload: CustomerRequest | CustomerCreateRequest | CustomerGetRequest | CustomerDeleteRequest) => {
  try {
    const response = await http(`${API_URL}${url}`, HTTP_METHODS.POST, payload);
    return response.json();
  } catch (error: any) {
    throw new Error(`Error en la solicitud de cliente: ${error}`);
  }
};

export const createCustomer = async (request: CustomerCreateRequest) => {
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
    dinBody: {},
  };
  //@ts-ignore
  return makeCustomerRequest('/v1/public/customers/create', payload);
};

export const getCustomer = async (request: CustomerGetRequest) => {
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
    dinBody: {
      id: request.dinBody.id,
    },
  };
  return makeCustomerRequest('/v1/public/customers/get', payload);
};

export const deleteCustomer = async (request: CustomerDeleteRequest) => {
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
    dinBody: {
      id: request.dinBody.id,
    },
  };
  return makeCustomerRequest('/v1/public/customers/delete', payload);
};

export const customerRequest = async (request: CustomerRequest) => {
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
    dinBody: {},
  };
  //@ts-ignore
  return makeCustomerRequest('/v1/public/customers', payload);
};
