import { HTTP_METHODS } from "../../constants/httpMethods";
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface HttpRequestOptions<T> extends AxiosRequestConfig {
  method: HTTP_METHODS;
  url: string;
  data?: T;
  token?: string;
}

export const http = <T, R>({
  method,
  url,
  data,
  token,
  ...config
}: HttpRequestOptions<T>): Promise<AxiosResponse<R>> => {

  if(token) {
    console.log('token', token);
  }

  const headers = token 
    ? { ...config.headers, 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
    : config.headers;

    const requestData = data && token ? JSON.stringify(data) : data;

    return axios.request<R>({
      method,
      url,
      data: requestData,
      headers,
      ...config,
    });

};