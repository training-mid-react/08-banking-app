import { DepositForm } from "@ui/forms/DepositForm";
import LayoutBase from "@ui/layouts/user/LayoutBase";
import { useState } from "react";
import { useUser } from "../../core/hooks/useUser";
import { useForm } from "../../core/hooks/useForm";

export default function ATMDepositContainer() {
  const { accountNumber, ATMDepositFunction } = useUser();
  
  const formInitialState = {
    originAccount: accountNumber,
    destinationAccount: "",//"222222222",
    amount: '',
  };
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  //@ts-ignore
  const { originAccount, destinationAccount, amount, handleChange } = useForm(formInitialState, setError);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await ATMDepositFunction(amount, destinationAccount);
    } catch (error: any) {
      setError(JSON.stringify(error.message));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LayoutBase title="Depósito en Cajero">
      <DepositForm 
        originAccount={accountNumber} 
        destinationAccount={destinationAccount} 
        amount={amount} 
        handleSubmit={handleSubmit} 
        setFormField={handleChange} 
        error={error}
        isLoading={isLoading} 
        isDisabled={false}  
      />

    </LayoutBase>
  );
}