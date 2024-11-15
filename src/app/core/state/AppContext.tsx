/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useReducer, ReactNode } from 'react';
import { initialState, reducer } from './reducer';

interface AppContextProps {
  state: React.ReactNode;
  dispatch: React.Dispatch<any>;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    token: (() => {
      const token = localStorage.getItem("token");
      const expiration = localStorage.getItem("tokenExpiration");
      if (token && expiration && new Date().getTime() < +expiration) {
        return token;
      }
      return null;
    })(),
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
