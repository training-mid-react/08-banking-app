import { ROUTE_PATH } from "@core/constants";
import { useAppContext } from "@core/state/AppContext";
import { resetLoginData } from "@core/state/login";
import { Dashboard } from "@ui/components/dashboard";
import { AppLayout } from "@ui/layouts";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const DashboardContainer = () => {
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(resetLoginData(undefined));
    navigate(ROUTE_PATH.LOGIN);
  };

  return (
    <AppLayout>
      <Dashboard state={state} handleLogout={handleLogout} />
      <Toaster />
    </AppLayout>
  );
};
