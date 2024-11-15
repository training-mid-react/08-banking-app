import React from "react";
import Title from "../ui/components/Title";
import Body from "../ui/components/Body";
import DashboardLayout from "../ui/layouts/DashboardLayout";
import UserInfo from "../ui/components/UserInfo";
import CreateAccountCard from "../ui/components/CreateAccountCard";

const DashboardContainer: React.FC = () => {
  return (
   <DashboardLayout>
     <Title as="h2" color="primary">Tus cuentas</Title>
     <Body color="primary">Administra tus cuentas de forma segura y conveniente. Crea tu cuenta para comenzar a depositar y retirar dinero.</Body>
     <UserInfo />
     <CreateAccountCard accounts={[{ accountNumber: 12345678 }]} />
   </DashboardLayout>
  );
};

export default DashboardContainer;
