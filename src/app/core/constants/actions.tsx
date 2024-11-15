import SignUpContainer from "../../containers/admin/SignUpContainer";
import SomeAdditionalActionContainer from "../../containers/admin/SomeAdditionalActionContainer";
import ATMDepositContainer from "../../containers/user/ATMDepositContainer";
import ATMWithdrawalContainer from "../../containers/user/ATMWithdrawalContainer";
import BranchDepositContainer from "../../containers/user/BranchDepositContainer";
import PurchaseInStoreContainer from "../../containers/user/PurchaseInStoreContainer";
import PurchaseOnlineContainer from "../../containers/user/PurchaseOnlineContainer";
import ExternalDepositContainer from "../../containers/user/ExternalDepositContainer";
import { adminActions } from "../state/admin/actions";
import { userActions } from "../state/user/actions";

export interface ComponentAction {
  component: JSX.Element;
  label: string;
  action: string;
}

const adminComponentActions: ComponentAction[] = [
  {
    component: <SomeAdditionalActionContainer />,
    label: 'Some Additional Action',
    action: adminActions.SOME_ACTION,
  },
  {
    component: <SignUpContainer />,
    label: 'Registrar Usuario',
    action: adminActions.REGISTER_USER,
  },
];

const userComponentActions: ComponentAction[] = [
  {
    component: <BranchDepositContainer />,
    label: 'Depósito en Sucursal',
    action: userActions.DEPOSIT_FROM_BRANCH,
  },
  {
    component: <ATMDepositContainer />,
    label: 'Depósito en Cajero',
    action: userActions.DEPOSIT_FROM_ATM,
  },
  {
    component: <ExternalDepositContainer />,
    label: 'Depósito desde otra cuenta',
    action: userActions.DEPOSIT_FROM_ANOTHER_ACCOUNT,
  },
  {
    component: <PurchaseInStoreContainer />,
    label: 'Compra en Tienda',
    action: userActions.PURCHASE_IN_STORE,
  },
  {
    component: <PurchaseOnlineContainer />,
    label: 'Compra en Línea',
    action: userActions.PURCHASE_ON_WEBSITE,
  },
  {
    component: <ATMWithdrawalContainer />,
    label: 'Retiro desde Cajero',
    action: userActions.WITHDRAW_FROM_ATM,
  }
]

export { adminComponentActions, userComponentActions };