import LayoutBase from "@ui/layouts/user/LayoutBase";
import { useForm } from "../../core/hooks/useForm";
import { useState } from "react";
import { useUser } from "../../core/hooks/useUser";
import { PurchaseForm } from "@ui/forms/PurchaseForm";

export default function PurchaseInStoreContainer() {
  const { accountNumber, PurchaseInStoreFunction } = useUser();
    
  const formInitialState = {
    originAccount: accountNumber,
    amount: '',
  };
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  //@ts-ignore	
  const { originAccount, amount, handleChange } = useForm(formInitialState, setError);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await PurchaseInStoreFunction(amount);
    } catch (error: any) {
      setError(JSON.stringify(error.message));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LayoutBase title="Compra en Tienda">
      <PurchaseForm
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