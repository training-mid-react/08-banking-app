import { adminActions } from "./actions";
import { IAdminState } from "./reducer";

export const adminCases = {
  [adminActions.SOME_ACTION]: (state: IAdminState, payload: any) => {
    return {
      ...state,
      ...payload,
    };
  },
};