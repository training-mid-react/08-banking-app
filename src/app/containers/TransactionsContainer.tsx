import React from "react";
import Card from "../ui/components/Card";
import TransactionsLayout from "../ui/layouts/TransactionsLayout";
import Title from "../ui/components/Title";
import Body from "../ui/components/Body"

const TransactionsContainer: React.FC = () => {
  return (
    <TransactionsLayout>
      <Title as="h2" color='primary'>Transacciones</Title>
      <Body color="primary">Administra tus depósitos, retiros y compras de forma segura y conveniente.</Body>
      <Card title="Depósitos" description="Opciones de depósito desde sucursal, cuenta o cajero" to="/depositos" />
      <Card title="Retiros" description="Realiza retiros rápidos en cajeros" to="/retiros" />
      <Card title="Compras" description="Gestiona tus compras en tiendas físicas y online" to="/compras" />
    </TransactionsLayout>
  );
};

export default TransactionsContainer;
