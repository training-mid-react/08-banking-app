import { ROUTE_PATH } from "@core/constants";
import "./styles.scss";
import { useLogin } from "@core/hooks";
import { ILoginResponse } from "@core/interfaces";

export const Login = ({
  saveLoginData,
}: {
  saveLoginData: (loginData: ILoginResponse) => void;
}) => {
  const { errors, onSubmit, register, handleSubmit } = useLogin(saveLoginData);

  return (
    <div className="login">
      <h2>Iniciar sesión</h2>
      <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Nombre de usuario:
          <input
            type="text"
            id="username"
            placeholder="Nombre de usuario"
            required
            {...register("username", {
              required: "El nombre de usuario es obligatorio",
            })}
          />
          {errors.username && <span>{errors.username.message}</span>}
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            id="password"
            placeholder="Contraseña"
            required
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: {
                value: 6,
                message: "La contraseña debe tener al menos 6 caracteres",
              },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </label>
        <button type="submit">Iniciar sesión</button>
      </form>
      <p>
        ¿No tienes cuenta?
        <a href={ROUTE_PATH.SIGNUP} id="register-link">
          Regístrate aquí
        </a>
      </p>
    </div>
  );
};
