import { IContext, IState } from "@core/interfaces";
import { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { useGetAccounts } from "@core/hooks";

export const AppContext = createContext<IContext>({
  state: {} as IState,
  dispatch: () => {},
  balance: 0,
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { balance } = useGetAccounts();

  return (
    <AppContext.Provider value={{ state, balance, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
