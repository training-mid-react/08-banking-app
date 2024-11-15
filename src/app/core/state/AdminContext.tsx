
import { createContext, FC, ReactNode, useReducer } from "react";
import { adminInitialState, IAdminState, IContext, reducer } from "./admin/reducer";

interface Props {
  children: ReactNode | ReactNode[];
}

export const AdminContext = createContext<IContext>({ state: {} as IAdminState, dispatch: () => { } });

export const AdminProvider: FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, adminInitialState);

  return (
    <AdminContext.Provider value={{ state, dispatch }}>
      {children}
    </AdminContext.Provider>
  );
};
