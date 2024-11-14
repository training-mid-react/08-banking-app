import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Guard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { state } = useContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.isAuthenticated) {
      navigate('/'); // Redirige al login si no está autenticado
    }
  }, [state.isAuthenticated, navigate]);

  if (state.isAuthenticated) {
    return <>{children}</>; // Si está autenticado, muestra el contenido
  }

  return <div>Loading...</div>; // O puedes mostrar un loader si aún está verificando el estado
};
