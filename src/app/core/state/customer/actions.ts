// customerActions.ts

import { CustomerCreateRequest, CustomerDeleteRequest, CustomerGetRequest, CustomerRequest } from "@core/interfaces/customer";

export const customerActions = {
    CREATE_CUSTOMER_REQUEST: 'CREATE_CUSTOMER_REQUEST',
    CREATE_CUSTOMER_SUCCESS: 'CREATE_CUSTOMER_SUCCESS',
    CREATE_CUSTOMER_FAILURE: 'CREATE_CUSTOMER_FAILURE',
    
    GET_CUSTOMER_REQUEST: 'GET_CUSTOMER_REQUEST',
    GET_CUSTOMER_SUCCESS: 'GET_CUSTOMER_SUCCESS',
    GET_CUSTOMER_FAILURE: 'GET_CUSTOMER_FAILURE',
    
    DELETE_CUSTOMER_REQUEST: 'DELETE_CUSTOMER_REQUEST',
    DELETE_CUSTOMER_SUCCESS: 'DELETE_CUSTOMER_SUCCESS',
    DELETE_CUSTOMER_FAILURE: 'DELETE_CUSTOMER_FAILURE',
    
    CUSTOMER_REQUEST_REQUEST: 'CUSTOMER_REQUEST_REQUEST',
    CUSTOMER_REQUEST_SUCCESS: 'CUSTOMER_REQUEST_SUCCESS',
    CUSTOMER_REQUEST_FAILURE: 'CUSTOMER_REQUEST_FAILURE',
  };
  
  export const createCustomerRequest = (request: CustomerCreateRequest) => ({
    type: customerActions.CREATE_CUSTOMER_REQUEST,
    payload: request,
  });
  
  export const createCustomerSuccess = (response: any) => ({
    type: customerActions.CREATE_CUSTOMER_SUCCESS,
    payload: response,
  });
  
  export const createCustomerFailure = (error: string) => ({
    type: customerActions.CREATE_CUSTOMER_FAILURE,
    payload: error,
  });
  
  export const getCustomerRequest = (request: CustomerGetRequest) => ({
    type: customerActions.GET_CUSTOMER_REQUEST,
    payload: request,
  });
  
  export const getCustomerSuccess = (response: any) => ({
    type: customerActions.GET_CUSTOMER_SUCCESS,
    payload: response,
  });
  
  export const getCustomerFailure = (error: string) => ({
    type: customerActions.GET_CUSTOMER_FAILURE,
    payload: error,
  });
  
  export const deleteCustomerRequest = (request: CustomerDeleteRequest) => ({
    type: customerActions.DELETE_CUSTOMER_REQUEST,
    payload: request,
  });
  
  export const deleteCustomerSuccess = (response: any) => ({
    type: customerActions.DELETE_CUSTOMER_SUCCESS,
    payload: response,
  });
  
  export const deleteCustomerFailure = (error: string) => ({
    type: customerActions.DELETE_CUSTOMER_FAILURE,
    payload: error,
  });
  
  export const customerRequestRequest = (request: CustomerRequest) => ({
    type: customerActions.CUSTOMER_REQUEST_REQUEST,
    payload: request,
  });
  
  export const customerRequestSuccess = (response: any) => ({
    type: customerActions.CUSTOMER_REQUEST_SUCCESS,
    payload: response,
  });
  
  export const customerRequestFailure = (error: string) => ({
    type: customerActions.CUSTOMER_REQUEST_FAILURE,
    payload: error,
  });
  