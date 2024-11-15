import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../../core/state/AppContext";

export const Guard = ({ children }: { children: JSX.Element }) => {
  const { state } = useContext(AppContext)!;
  const token = state.token;

  const expiration = localStorage.getItem("tokenExpiration");
  const isTokenExpired = expiration && new Date().getTime() >= +expiration;

  if (!token || isTokenExpired) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
