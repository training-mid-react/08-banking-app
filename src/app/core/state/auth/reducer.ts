import { AuthResponse } from '@interfaces/auth';
import { loginActions } from './actions';

interface AuthState {
  user: AuthResponse | null;
  token: string | null; 
  loading: boolean;
  error: string | null;
}

export const authInitialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

export const authCases = {
  [loginActions.LOGIN_REQUEST]: (state: AuthState) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [loginActions.LOGIN_SUCCESS]: (state: AuthState, payload: AuthResponse) => {
    return {
      ...state,
      loading: false,
      user: payload,
      token: payload.dinBody.token
    };
  },
  [loginActions.LOGIN_FAILURE]: (state: AuthState, payload: string) => ({
    ...state,
    loading: false,
    error: payload,
  }),
  [loginActions.REGISTER_SUCCESS]: (state: AuthState, payload: AuthResponse) => {
    return {
      ...state,
      loading: false,
      user: payload,
      token: payload.dinBody.token
    };
  },
  [loginActions.REGISTER_FAILURE]: (state: AuthState, payload: string) => {
    return {
      ...state,
      loading: false,
      error: payload,
    };
  },
  [loginActions.LOGOUT]: (state: AuthState) => {
    localStorage.removeItem('token');
    return {
      ...state,
      user: null,
      token: null
    };
  },
};
