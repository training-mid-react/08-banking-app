import { localStorageProperties } from "@core/constants";
import {
  IGetAllCustomerAccountRequest,
  IGetAllCustomerAccountResponse,
} from "@core/interfaces";
import { getAllCustomerAccount } from "@core/services";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useGetAccounts = () => {
  const [accounts, setAccounts] = useState<IGetAllCustomerAccountResponse[]>(
    []
  );
  let balance = 0;
  const { mutate: getAllAccounts } = useMutation({
    mutationFn: async (data: IGetAllCustomerAccountRequest) =>
      await getAllCustomerAccount(data),
    onSuccess: (data) => {
      if (data.dinBody) setAccounts(data?.dinBody);
      else toast(data.dinError.detail);
    },
  });

  balance = accounts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.amount || 0,
    0
  );

  useEffect(() => {
    getAllAccounts({
      customerId: String(
        localStorage.getItem(localStorageProperties.customerId)
      ),
    });
  }, [localStorage.getItem(localStorageProperties.customerId)]);

  return { accounts, balance };
};

export default useGetAccounts;
