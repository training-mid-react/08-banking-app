import { HTTP_METHODS } from '../constants/httpMethods';
import { WithdrawRequest, PurchaseCardRequest, DepositRequest, TransactionResponse } from '../interfaces/transaction';
import { http } from './generals/http';
import * as CryptoJS from 'crypto-js';

const API_URL = import.meta.env.VITE_API_URL;
const SECREY_KEY = import.meta.env.VITE_SECRET_KEY;
const INITIALIZATION_VECTOR = import.meta.env.VITE_INITIALIZATION_VECTOR;

const makeTransaction = async (url: string, payload: WithdrawRequest | PurchaseCardRequest | DepositRequest): Promise<TransactionResponse> => {
  try {
    const response = await http(`${API_URL}${url}`, HTTP_METHODS.POST, payload)
    return response.json()
  } catch (error: any) {
    return error
  }
};


export const encryptAES = (text: string) => {
  const ciphertext = CryptoJS.AES.encrypt(
    text,
    CryptoJS.enc.Utf8.parse(SECREY_KEY),
    {
      iv: CryptoJS.enc.Utf8.parse(INITIALIZATION_VECTOR),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }
  );

  return ciphertext.ciphertext.toString(CryptoJS.enc.Base64);
};

// retiros

export const decryptAES = (encryptedText: string) => {
  const bytes = CryptoJS.AES.decrypt(
    encryptedText,
    CryptoJS.enc.Utf8.parse(SECREY_KEY),
    {
      iv: CryptoJS.enc.Utf8.parse(INITIALIZATION_VECTOR),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }
  );
  return bytes.toString(CryptoJS.enc.Utf8);
};


export const withdraw = async (request: WithdrawRequest): Promise<TransactionResponse> => {
  console.log(request.dinBody.accountNumber)
  const decryptedAccountNumber = decryptAES(request.dinBody.accountNumber);
  console.log(decryptedAccountNumber)

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
      accountNumber: encryptAES(decryptedAccountNumber),
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

// depositos

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
      accountNumber: encryptAES(request.dinBody.accountNumber),
      amount: request.dinBody.amount,
      type: request.dinBody.type,
      username: request.dinBody.username,
    },
  };
  return makeTransaction('/v1/private/transactions/deposit', payload);
};
