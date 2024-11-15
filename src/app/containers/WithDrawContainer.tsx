import React, { useState } from "react";
import { useTransaction } from "../core/hooks/useTransaction";
import { WithdrawRequest } from "../core/interfaces/transaction";
import Input from "../ui/components/Input";
import Button from "../ui/components/Button";
import Title from "../ui/components/Title";
import Body from "../ui/components/Body";
import WithDrawLayout from "../ui/layouts/WithDrawLayout";

const WithDrawContainer: React.FC = () => {
  const { handleWithdraw, state } = useTransaction();

  const [withdrawRequest, setWithdrawRequest] = useState<WithdrawRequest>({
    dinHeader: {
      device: "",
      language: "",
      uuid: "",
      ip: "",
      transactionTime: "",
    },
    dinBody: { username: "", accountNumber: "", amount: 0 },
  });

  const handleWithdrawChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWithdrawRequest((prev) => ({
      ...prev,
      dinBody: {
        ...prev.dinBody,
        [name]: name === "amount" ? parseFloat(value) : value,
      },
    }));
  };

  const submitWithdraw = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleWithdraw(withdrawRequest);
  };

  return (
    <WithDrawLayout>
      <form onSubmit={submitWithdraw}>
        <Title as="h3" color="primary">Retiros</Title>
        <br />
        <Body color="primary"> Realiza retiros rápidos en cajeros. Cada retiro tiene un coste de $U1.00</Body>
        <Input color="primary" type="text" id="username" name="username" value={withdrawRequest.dinBody.username} onChange={handleWithdrawChange} required label="Nombre de usuario" />
        <Input color="primary" type="text" id="accountNumber" name="accountNumber" value={withdrawRequest.dinBody.accountNumber} onChange={handleWithdrawChange} required label="Número de cuenta" />
        <Input color="primary" type="number" id="amount" name="amount" value={withdrawRequest.dinBody.amount === 0 ? "" : withdrawRequest.dinBody.amount} onChange={handleWithdrawChange} required label="Monto" />
        <Button type="submit">Retirar</Button>
      </form>

      {state.loading && <p>Loading...</p>}
      {state.error && <p style={{ color: "red" }}>Error: {state.error}</p>}
      {state.transaction && (
        <div>
          <h3>Transaction Result</h3>
          <p>ID: {state.transaction.transactionId}</p>
          <p>Status: {state.transaction.status}</p>
          <p>Message: {state.transaction.message}</p>
        </div>
      )}
    </WithDrawLayout>
  );
};

export default WithDrawContainer;
