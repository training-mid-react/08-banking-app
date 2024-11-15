import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./app/routers";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AppProvider } from "@core/state/AppContext";
import "./app/ui/styles/styles.scss";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </QueryClientProvider>
  </StrictMode>
);
