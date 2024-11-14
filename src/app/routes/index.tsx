import { createBrowserRouter } from "react-router-dom";
import { AppContextProvider } from "../core/state/AppContext";
import LoginContainer from "../containers/LoginContainer";
import RegisterContainer from "../containers/RegisterContainer";
import { Guard } from "./guards/AuthGuard";

export const router = createBrowserRouter([
  {
    path: "",
    element: (
      <AppContextProvider>
        <LoginContainer />
      </AppContextProvider>
    ),
  },
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
    path: "/protected",
    element: (
      <AppContextProvider>
        <Guard>
          <h1>Protected Page</h1>
        </Guard>
      </AppContextProvider>
    ),
  },
]);
