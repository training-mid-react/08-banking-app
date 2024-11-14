import { EncryptionResponse } from '@interfaces/encryption';
import { encryptionActions } from './actions';

interface EncryptionState {
  loading: boolean;
  data: EncryptionResponse | null;
  error: string | null;
}

export const encryptionInitialState: EncryptionState = {
  loading: false,
  data: null,
  error: null,
};

 export const encryptionCases = {
  [encryptionActions.ENCRYPT_DATA_REQUEST]: (state: EncryptionState) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [encryptionActions.ENCRYPT_DATA_SUCCESS]: (state: EncryptionState, payload: EncryptionResponse) => ({
    ...state,
    loading: false,
    data: payload,
  }),
  [encryptionActions.ENCRYPT_DATA_FAILURE]: (state: EncryptionState, payload: string) => ({
    ...state,
    loading: false,
    error: payload,
  }),
};
