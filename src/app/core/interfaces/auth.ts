export interface AuthCredentials {
    username: string;
    password: string;
  }
  
  export interface AuthToken {
    accessToken: string;
    refreshToken: string;
    expiresIn: number; 
  }
  
  export interface AuthResponse {
    token: AuthToken;
  }
  
  export interface AuthHeader {
    device: string;
    language: string;
    uuid: string;
    ip: string;
    transactionTime: string;
  }
  
  export interface AuthCreateRequest {
    dinHeader: AuthHeader;
    dinBody: {
      username: string;
      password: string;
    };
  }