import { AuthResponse } from '@interfaces/auth';
import { loginActions } from './actions';

interface AuthState {
  user: AuthResponse | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export const authInitialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

export const authCases = {
  [loginActions.LOGIN_REQUEST]: (state: AuthState) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [loginActions.LOGIN_SUCCESS]: (state: AuthState, payload: AuthResponse) => ({
    ...state,
    loading: false,
    isAuthenticated: true,
    user: payload,
  }),
  [loginActions.LOGIN_FAILURE]: (state: AuthState, payload: string) => ({
    ...state,
    loading: false,
    error: payload,
  }),
  [loginActions.REGISTER_REQUEST]: (state: AuthState) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [loginActions.REGISTER_SUCCESS]: (state: AuthState, payload: AuthResponse) => ({
    ...state,
    loading: false,
    isAuthenticated: true,
    user: payload,
  }),
  [loginActions.REGISTER_FAILURE]: (state: AuthState, payload: string) => ({
    ...state,
    loading: false,
    error: payload,
  }),
  [loginActions.LOGOUT]: (state: AuthState) => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
};
