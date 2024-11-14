import { HTTP_METHODS } from '@core/constants/httpMethods';
import { WithdrawRequest, PurchaseCardRequest, DepositRequest, TransactionResponse } from '@interfaces/transaction';
import { http } from './generals/http';

const API_URL = process.env.VITE_API_URL;
const SECREY_KEY = process.env.VITE_SECRET_KEY;
const INITIALIZATION_VECTOR = process.env.VITE_INITIALIZATION_VECTOR;

const makeTransaction = async (url: string, payload: WithdrawRequest | PurchaseCardRequest | DepositRequest): Promise<TransactionResponse> => {
  try {
    const response = await http(`${API_URL}${url}`, HTTP_METHODS.POST, payload)
    return response.json()
  } catch (error: any) {
    return error
  }
};

export const withdraw = async (request: WithdrawRequest): Promise<TransactionResponse> => {
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
      username: request.dinBody.username,
      accountNumber: request.dinBody.accountNumber,
      amount: request.dinBody.amount,
    },
  };
  return makeTransaction('/v1/private/transactions/withdraw', payload);
};

export const purchaseCard = async (request: PurchaseCardRequest): Promise<TransactionResponse> => {
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
      accountNumber: request.dinBody.accountNumber,
      amount: request.dinBody.amount,
      type: request.dinBody.type,
      purchaseType: request.dinBody.purchaseType,
    },
  };
  return makeTransaction('/v1/private/transactions/purchase-card', payload);
};

export const deposit = async (request: DepositRequest): Promise<TransactionResponse> => {
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
      accountNumber: request.dinBody.accountNumber,
      amount: request.dinBody.amount,
      type: request.dinBody.type,
      username: request.dinBody.username,
    },
  };
  return makeTransaction('/v1/private/transactions/deposit', payload);
};
