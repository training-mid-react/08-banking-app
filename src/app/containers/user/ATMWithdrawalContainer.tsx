import LayoutBase from "@ui/layouts/user/LayoutBase";
import { useUser } from "../../core/hooks/useUser";
import { ATMWithdrawalForm } from "@ui/forms/ATMWithdrawalForm";
import { useState } from "react";
import { useForm } from "../../core/hooks/useForm";

export default function ATMWithdrawalContainer() {
  const { accountNumber, ATMWithdrawalFunction } = useUser();
  
  const formInitialState: {
    originAccount: string,
    amount: number
  } = {
    originAccount: accountNumber,
    amount: 0,
  };
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  //@ts-ignore
  const { originAccount, amount, handleChange } = useForm(formInitialState, setError);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await ATMWithdrawalFunction(amount);
    } catch (error: any) {
      setError(JSON.stringify(error.message));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LayoutBase title="Retiro desde Cajero">
      <ATMWithdrawalForm 
        originAccount={accountNumber} 
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