
export interface AuthState {
    user: { id: string; name: string } | null;
  }
  
  export interface AccountState {
    balance: number;
    accountNumber: string;
  }
  
  export interface TransactionState {
    transactions: { id: string; amount: number; type: string }[];
  }

export interface EncryptionState {
    encryptionKey: string | null;
    iv: string | null; 
    isEncrypted: boolean;
  }

export interface CustomerState {
    name: string | null;
    email: string | null;
    address: string | null;
    phone: string | null;
  }
  
  export interface AppState {
    auth: AuthState;       
    account: AccountState;  
    transaction: TransactionState;
  }
  