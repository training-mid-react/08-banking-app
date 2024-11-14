import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Guard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { state } = useContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.isAuthenticated) {
      navigate('/');
    }
  }, [state.isAuthenticated, navigate]);

  if (state.isAuthenticated) {
    return <>{children}</>;
  }

  return <div>Loading...</div>;
};
