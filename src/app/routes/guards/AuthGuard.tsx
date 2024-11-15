import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../../core/state/AppContext";

export const Guard = ({ children }: { children: JSX.Element }) => {
  const { state } = useContext(AppContext)!;
  const token = state;

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
