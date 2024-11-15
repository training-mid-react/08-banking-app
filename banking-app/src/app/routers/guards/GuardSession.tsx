import { AppContext } from "@core/state/AppContext";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const GuardSession = ({ children }: { children: React.ReactNode }) => {
  const { state } = useContext(AppContext);
  const token = state?.loginData?.token;
  const navigate = useNavigate();

  useEffect(() => {
    if (!token && localStorage.getItem("token") === null) return navigate("/");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, String(localStorage.getItem("token"))]);

  return children;
};
