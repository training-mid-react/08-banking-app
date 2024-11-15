import { ROUTE_PATH } from "@core/constants";
import { useAccountContext } from "@core/state/context/account/AccountContext";
import { AppLayout } from "@ui/layouts";
import React from "react";
import { Toaster } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

export const AppContainer = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === ROUTE_PATH.DASHBOARD;
  const { refetchAccounts } = useAccountContext();

  return (
    <AppLayout>
      {!isHome && (
        <button
          title="Regresar"
          onClick={() => {
            refetchAccounts();
            navigate(ROUTE_PATH.DASHBOARD);
          }}
        >
          Regresar
        </button>
      )}
      {children}
      <Toaster />
    </AppLayout>
  );
};
