import { HTTP_METHODS } from "../../constants/httpMethods";

export const http = async (url: string, method: HTTP_METHODS, data?: any) => {
  try {
    const response = await fetch(url, {
      method: method.toString(),
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    if (response.ok) {
      return response.json();
    }
  } catch (error: any) {
    throw new Error(error?.message ?? 'Something went wrong');
  }
};