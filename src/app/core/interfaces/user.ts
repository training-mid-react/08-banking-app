
export type User = {
  username: string;
  role: ROLES | null;
  token: string;
};

export type Account = {
  accountNumber: string;
  balance: number;
  customer: string;
};

export enum ROLES {
  USER = 'USER',
  ADMIN = 'ADMIN',
  VIP = 'VIP',
}