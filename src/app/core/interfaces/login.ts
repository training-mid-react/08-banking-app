import { DinError, DinHeader } from "./request";
import { ROLES } from "./user";

export type DinBodyLogin = {
  username: string;
  password: string;
};

export type LoginRequest = {
  dinHeader: DinHeader;
  dinBody: DinBodyLogin;
};

export type DetalleCuenta = {
  amount: number;
  createdAt: string;
  customer: string;
  customerId: number;
  deleted: boolean;
  id: number;
  number: string;
}

export type LoginResponse = {
  dinHeader: DinHeader;
  dinBody: {
    token: string;
    roles: ROLES[];
    username: string;
    cuentas?: DetalleCuenta[];
  };
  dinError: DinError;
};
