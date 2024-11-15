export interface AuthCredentials {
    username: string;
    password: string;
  }

  export interface RegisterCredentials {
    name: string;        
    lastname: string;   
    username: string;    
    password: string;    
    roles: string[];
  }

  export interface AuthToken {
    accessToken: string;
    refreshToken: string;
    expiresIn: number; 
  }
  
  export interface AuthResponse {
    dinBody: {
      token: string;
    }
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

  export interface RegisterCreateRequest {
    dinHeader: AuthHeader;
    dinBody: {
      name: string;        
      lastname: string;   
      username: string;    
      password: string;    
      roles: string[];
    }
  }