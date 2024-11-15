import { DinError, DinHeader } from "./request";
import { ROLES } from "./user";

export type DinBodySignUp = {
  username: string;
  password: string;
  roles: ROLES[];
  customerId: number;
};

export type SignUpRequest = {
  dinHeader: DinHeader;
  dinBody: DinBodySignUp;
};

export type SignUpResponse = {
  dinHeader: DinHeader;
  dinBody: {
    id: number,
    username: string,
    customerName: string,
    roles: ROLES[];
    customerId: number,
    createdAt: string,
    password: string,
    deleted: true
  };
  dinError: DinError;
};
