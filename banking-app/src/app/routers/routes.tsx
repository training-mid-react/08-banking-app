import { createBrowserRouter } from "react-router-dom";
import { SignupContainer } from "@containers/SignupContainer";
import { LoginContainer } from "@containers/LoginContainer";
import { AppContainer } from "@containers/AppContainer";
import { ROUTE_PATH } from "@core/constants";
import { DepositDashboard } from "@ui/components/depositDashboard/DepositDashboard";
import { WithdrawDashboard } from "@ui/components/withdrawDashboard";
import { PurchaseDashboard } from "@ui/components/purchaseDashboard/PurchaseDashboard";
import { GuardSession } from "./guards";
import { CreateBankAccount } from "@ui/components/account";
import { DashboardContainer } from "@containers/DashboardContainer";

export const router = createBrowserRouter([
  {
    path: ROUTE_PATH.LOGIN,
    element: <LoginContainer />,
  },
  {
    path: ROUTE_PATH.SIGNUP,
    element: <SignupContainer />,
  },
  {
    path: ROUTE_PATH.DASHBOARD,
    element: (
      <AppContainer
        children={
          <GuardSession>
            <DashboardContainer />
          </GuardSession>
        }
      />
    ),
  },
  {
    path: ROUTE_PATH.DEPOSIT,
    element: (
      <AppContainer
        children={
          <GuardSession>
            <DepositDashboard />
          </GuardSession>
        }
      />
    ),
  },
  {
    path: ROUTE_PATH.WITHDRAW,
    element: (
      <AppContainer
        children={
          <GuardSession>
            <WithdrawDashboard />
          </GuardSession>
        }
      />
    ),
  },
  {
    path: ROUTE_PATH.PURCHASE,
    element: (
      <AppContainer
        children={
          <GuardSession>
            <PurchaseDashboard />
          </GuardSession>
        }
      />
    ),
  },
  {
    path: ROUTE_PATH.ACOUNT,
    element: (
      <AppContainer
        children={
          <GuardSession>
            <CreateBankAccount />
          </GuardSession>
        }
      />
    ),
  },
]);
