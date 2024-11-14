import { accountCases, accountInitialState } from "./account/reducer";
import { authCases, authInitialState } from "./auth/reducer";
import { customerCases, customerInitialState } from "./customer/reducer";
import { encryptionCases, encryptionInitialState } from "./encryption/reducer";
import { transactionCases, transactionInitialState } from "./transactions/reducer";

export const initialState = {
    ...authInitialState,
    ...customerInitialState,
    ...accountInitialState,
    ...transactionInitialState,
    ...encryptionInitialState,
  };

  export const reducer = (state: any, action: any) => {
    const cases = {
        ...authCases,
        ...customerCases,
        ...accountCases,
        ...transactionCases,
        ...encryptionCases,
      };

      return cases[action.type] ? cases[action.type](state, action.payload) : state;
    }