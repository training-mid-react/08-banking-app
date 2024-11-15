import { localStorageProperties } from "@core/constants";
import {
  IDinResponseGetAllCustomerAccountResponse,
  IGetAllCustomerAccountResponse,
} from "@core/interfaces";
import { getAllCustomerAccount } from "@core/services";
import { useAppContext } from "@core/state/AppContext";
import { setGlobalBalance, setUserAccounts } from "@core/state/globalBalance";
import { useMutation } from "@tanstack/react-query";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AccountContext } from "./AccountContext";

export const AccountProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const customerId = String(
    localStorage.getItem(localStorageProperties.customerId)
  );
  const { state, dispatch } = useAppContext();
  const [accounts, setAccounts] = useState<IGetAllCustomerAccountResponse[]>(
    []
  );

  const handleOnSuccess = (data: IDinResponseGetAllCustomerAccountResponse) => {
    if (data.dinBody) {
      const balance = data.dinBody.reduce(
        (accumulator, currentValue) => accumulator + currentValue.amount || 0,
        0
      );
      dispatch(setGlobalBalance(balance));
      dispatch(setUserAccounts(data.dinBody));
      setAccounts(data?.dinBody);
    } else toast(data.dinError.detail);
  };

  const { mutate: getAllAccounts } = useMutation({
    mutationFn: getAllCustomerAccount,
    onSuccess: handleOnSuccess,
  });

  const refetchAccounts = () => getAllAccounts({ customerId });

  useEffect(() => {
    refetchAccounts();
    return () => refetchAccounts();
  }, []);

  return (
    <AccountContext.Provider
      value={{ accounts, balance: state.balance, refetchAccounts }}
    >
      {children}
    </AccountContext.Provider>
  );
};
