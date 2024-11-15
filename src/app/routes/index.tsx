import { createBrowserRouter } from "react-router-dom";
import { AppContextProvider } from "../core/state/AppContext";
import LoginContainer from "../containers/LoginContainer";
import RegisterContainer from "../containers/RegisterContainer";
import { Guard } from "./guards/AuthGuard";
import { TransactionContextProvider } from "../core/state/transactions/TransactionContext";
import TransactionsContainer from "../containers/TransactionsContainer";
import DepositsContainer from "../containers/DepositsContainer";
import WithDrawContainer from "../containers/WithDrawContainer";
import DashboardContainer from "../containers/DashboardContainer";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <AppContextProvider>
        <LoginContainer />
      </AppContextProvider>
    ),
  },
  {
    path: "/register",
    element: (
      <AppContextProvider>
        <RegisterContainer />
      </AppContextProvider>
    ),
  },
  {
    path: "/transacciones",
    element: (
      <AppContextProvider>
        <TransactionContextProvider>
        <Guard>
          <TransactionsContainer />
        </Guard>
        </TransactionContextProvider>
      </AppContextProvider>
    ),
  },
  {
    path: '/retiros',
    element: (
      <AppContextProvider>
      <TransactionContextProvider>
      <Guard>
        <WithDrawContainer />
      </Guard>
      </TransactionContextProvider>
    </AppContextProvider>
    )
  },
  {
    path: '/depositos',
    element: (
      <AppContextProvider>
      <TransactionContextProvider>
      <Guard>
        <DepositsContainer />
      </Guard>
      </TransactionContextProvider>
    </AppContextProvider>
    )
  },
  {
    path: '/inicio',
    element: (
      <AppContextProvider>
      <TransactionContextProvider>
      <Guard>
        <DashboardContainer />
      </Guard>
      </TransactionContextProvider>
    </AppContextProvider>
    )
  }
]);
