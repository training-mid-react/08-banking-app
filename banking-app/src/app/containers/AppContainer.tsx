import { ROUTE_PATH } from "@core/constants";
import { AppLayout } from "@ui/layouts";
import React from "react";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const AppContainer = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  return (
    <AppLayout>
      {children}
      <button onClick={() => navigate(ROUTE_PATH.DASHBOARD)}>Regresar</button>
      <Toaster />
    </AppLayout>
  );
};
