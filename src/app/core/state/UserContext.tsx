import { createContext, FC, ReactNode, useReducer } from "react";
import { IContext, IUserState, reducer, userInitialState } from "./user/reducer";

interface Props {
  children: ReactNode | ReactNode[];
}

export const UserContext = createContext<IContext>({ state: {} as IUserState, dispatch: () => { } });

export const UserProvider: FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, userInitialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
