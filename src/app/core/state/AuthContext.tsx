import { createContext, ReactNode, FC, useReducer } from 'react';
import { authInitialState, IAuthState, IContext, reducer } from './auth/reducer';

interface Props {
  children: ReactNode | ReactNode[];
}

export const AuthContext = createContext<IContext>({ state: {} as IAuthState, dispatch: () => { } });

export const AuthProvider: FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, authInitialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
