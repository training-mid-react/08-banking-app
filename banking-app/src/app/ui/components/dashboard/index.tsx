import { ROUTE_PATH } from "@core/constants";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import { IState } from "@core/interfaces";
import { FC } from "react";

export interface IDashboardProps {
  state: IState;
  handleLogout: () => void;
  refetchAccounts: () => void;
}

export const Dashboard: FC<IDashboardProps> = (props) => {
  const navigate = useNavigate();
  const { state, handleLogout, refetchAccounts } = props;

  return (
    <div className="dashboard">
      <h1 className="dashboard__title">
        Bienvenido, {state.loginData?.username}
      </h1>
      <h3 className="dashboard__balance">
        Su saldo disponible es: $
        <span className="dashboard__balance-amount">{state.balance}</span>
        <button onClick={() => refetchAccounts()}>Recargar</button>
      </h3>
      <div className="dashboard__buttons">
        <button
          className="dashboard__button dashboard__button--deposit"
          onClick={() => navigate(ROUTE_PATH.DEPOSIT)}
        >
          Depósito
        </button>
        <button
          className="dashboard__button dashboard__button--purchase"
          onClick={() => navigate(ROUTE_PATH.PURCHASE)}
        >
          Comprar
        </button>
        <button
          className="dashboard__button dashboard__button--account"
          onClick={() => navigate(ROUTE_PATH.ACOUNT)}
        >
          Gestion de cuentas
        </button>
        <button
          className="dashboard__button dashboard__button--withdraw"
          onClick={() => navigate(ROUTE_PATH.WITHDRAW)}
        >
          Retirar
        </button>
      </div>
      <div className="dashboard__logout">
        <button
          className="dashboard__button dashboard__button--logout"
          onClick={handleLogout}
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};
