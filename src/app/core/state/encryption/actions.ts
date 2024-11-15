import { EncryptionRequest, EncryptionResponse } from "@core/interfaces/encryption";

export const encryptionActions = {
    ENCRYPT_DATA_REQUEST: 'ENCRYPT_DATA_REQUEST',
    ENCRYPT_DATA_SUCCESS: 'ENCRYPT_DATA_SUCCESS',
    ENCRYPT_DATA_FAILURE: 'ENCRYPT_DATA_FAILURE',
  };
  
  export const encryptDataRequest = (request: EncryptionRequest) => ({
    type: encryptionActions.ENCRYPT_DATA_REQUEST,
    payload: request,
  });
  
  export const encryptDataSuccess = (response: EncryptionResponse) => ({
    type: encryptionActions.ENCRYPT_DATA_SUCCESS,
    payload: response,
  });
  
  export const encryptDataFailure = (error: string) => ({
    type: encryptionActions.ENCRYPT_DATA_FAILURE,
    payload: error,
  });
  