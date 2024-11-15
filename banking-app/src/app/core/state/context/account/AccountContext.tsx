import { IGetAllCustomerAccountResponse } from "@core/interfaces";
import { createContext, useContext } from "react";

export const AccountContext = createContext<{
  accounts: IGetAllCustomerAccountResponse[];
  refetchAccounts: () => void;
  balance?: number | null;
}>({
  accounts: [],
  refetchAccounts: () => {},
  balance: 0,
});

export const useAccountContext = () => useContext(AccountContext);
