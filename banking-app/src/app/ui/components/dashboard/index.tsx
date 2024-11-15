import { ROUTE_PATH } from "@core/constants";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import { IState } from "@core/interfaces";
import { FC } from "react";

export const Dashboard: FC<{ state: IState; balance: number }> = ({
  state,
  balance,
}) => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      {/* TODO: mejorar esto */}
      <h1>
        Bienvenido {state.loginData?.customerId ?? localStorage.getItem("name")}
      </h1>
      <h3>
        Saldo disponible: $<span id="account-balance">{balance}</span>
      </h3>
      <div>
        <button id="deposit-btn" onClick={() => navigate(ROUTE_PATH.DEPOSIT)}>
          Depósito
        </button>
        <button id="purchase-btn" onClick={() => navigate(ROUTE_PATH.PURCHASE)}>
          Comprar
        </button>
        <button id="purchase-btn" onClick={() => navigate(ROUTE_PATH.ACOUNT)}>
          Crear cuenta
        </button>
        <button id="withdraw-btn" onClick={() => navigate(ROUTE_PATH.WITHDRAW)}>
          Retirar
        </button>
      </div>
      <div>
        <button id="logout-btn" onClick={() => localStorage.clear()}>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};
