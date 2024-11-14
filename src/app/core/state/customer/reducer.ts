// customerReducer.ts

import { customerActions } from './actions';
import { CustomerCreateRequest, CustomerDeleteRequest, CustomerGetRequest, CustomerRequest } from '@core/interfaces/customer';

interface CustomerState {
  customer: any | null;
  loading: boolean;
  error: string | null;
}

export const customerInitialState: CustomerState = {
  customer: null,
  loading: false,
  error: null,
};

export const customerCases = {
  [customerActions.CREATE_CUSTOMER_REQUEST]: (state: CustomerState, payload: CustomerCreateRequest) => ({
    ...state,
    loading: true,
    error: null,
  }),

  [customerActions.CREATE_CUSTOMER_SUCCESS]: (state: CustomerState, payload: any) => ({
    ...state,
    loading: false,
    customer: payload,
  }),

  [customerActions.CREATE_CUSTOMER_FAILURE]: (state: CustomerState, payload: string) => ({
    ...state,
    loading: false,
    error: payload,
  }),

  [customerActions.GET_CUSTOMER_REQUEST]: (state: CustomerState, payload: CustomerGetRequest) => ({
    ...state,
    loading: true,
    error: null,
  }),

  [customerActions.GET_CUSTOMER_SUCCESS]: (state: CustomerState, payload: any) => ({
    ...state,
    loading: false,
    customer: payload,
  }),

  [customerActions.GET_CUSTOMER_FAILURE]: (state: CustomerState, payload: string) => ({
    ...state,
    loading: false,
    error: payload,
  }),

  [customerActions.DELETE_CUSTOMER_REQUEST]: (state: CustomerState, payload: CustomerDeleteRequest) => ({
    ...state,
    loading: true,
    error: null,
  }),

  [customerActions.DELETE_CUSTOMER_SUCCESS]: (state: CustomerState, payload: any) => ({
    ...state,
    loading: false,
    customer: payload,
  }),

  [customerActions.DELETE_CUSTOMER_FAILURE]: (state: CustomerState, payload: string) => ({
    ...state,
    loading: false,
    error: payload,
  }),

  [customerActions.CUSTOMER_REQUEST_REQUEST]: (state: CustomerState, payload: CustomerRequest) => ({
    ...state,
    loading: true,
    error: null,
  }),

  [customerActions.CUSTOMER_REQUEST_SUCCESS]: (state: CustomerState, payload: any) => ({
    ...state,
    loading: false,
    customer: payload,
  }),

  [customerActions.CUSTOMER_REQUEST_FAILURE]: (state: CustomerState, payload: string) => ({
    ...state,
    loading: false,
    error: payload,
  }),
};
