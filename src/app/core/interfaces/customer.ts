import { AccountSummary } from "./account";

export interface CustomerHeader {
  device: string;
  language: string;
  uuid: string;
  ip: string;
  transactionTime: string;
}

export interface CustomerAuth {
  username: string;
  password: string;
}

export interface CustomerRequest {
  dinHeader: CustomerHeader;
  dinBody: {
    username: string;
    password: string;
  };
}

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  createdAt: Date;
  accounts: AccountSummary[];
}

export interface CustomerCreateRequest {
  dinHeader: CustomerHeader;
  dinBody: {
    username: string;
  };
}

export interface CustomerGetRequest {
  dinHeader: CustomerHeader;
  dinBody: {
    id: string;
  };
}

export interface CustomerDeleteRequest {
  dinHeader: CustomerHeader;
  dinBody: {
    id: string;
  };
}

export interface CustomerUpdate {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
}
