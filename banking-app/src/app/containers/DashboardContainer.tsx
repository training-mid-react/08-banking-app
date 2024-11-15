import { AppContext } from "@core/state/AppContext";
import { Dashboard } from "@ui/components/dashboard";
import { AppLayout } from "@ui/layouts";
import { useContext } from "react";
import { Toaster } from "react-hot-toast";

export const DashboardContainer = () => {
  const { state, balance } = useContext(AppContext);

  return (
    <AppLayout>
      <Dashboard state={state} balance={balance} />
      <Toaster />
    </AppLayout>
  );
};
