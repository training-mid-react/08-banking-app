import { ROUTE_PATH } from "@core/constants";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import { IState } from "@core/interfaces";
import { FC } from "react";

export interface IDashboardProps {
  state: IState;
  handleLogout: () => void;
}
export const Dashboard: FC<IDashboardProps> = (props) => {
  // TODO: pasar a esto a un hook para limpiar
  const navigate = useNavigate();
  const { state, handleLogout } = props;

  return (
    <div className="dashboard">
      {/* TODO: mejorar esto */}
      <h1>Bienvenido {state.loginData?.username}</h1>
      <h3>
        Su saldo disponible es: $
        <span id="account-balance">{state.balance}</span>
      </h3>
      <div>
        <button id="deposit-btn" onClick={() => navigate(ROUTE_PATH.DEPOSIT)}>
          Depósito
        </button>
        <button id="purchase-btn" onClick={() => navigate(ROUTE_PATH.PURCHASE)}>
          Comprar
        </button>
        <button id="purchase-btn" onClick={() => navigate(ROUTE_PATH.ACOUNT)}>
          Gestion de cuentas
        </button>
        <button id="withdraw-btn" onClick={() => navigate(ROUTE_PATH.WITHDRAW)}>
          Retirar
        </button>
      </div>
      <div>
        <button id="logout-btn" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};
