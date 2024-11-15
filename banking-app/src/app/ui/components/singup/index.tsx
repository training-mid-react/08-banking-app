import { useSignup } from "@core/hooks/signup/useSignup";
import { ROUTE_PATH } from "@core/constants";
import { Toaster } from "react-hot-toast";
import "./styles.scss";

export const SignupForm = () => {
  const { errors, isLoading, onSubmit, register, handleSubmit, watch } =
    useSignup();

  return (
    <div className="signup-form">
      <form
        id="register-form"
        className="signup-form__form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="signup-form__title">Regístrate</h2>
        <div className="flex">
          <div className="signup-form__input-group">
            <label className="signup-form__label">Nombre:</label>
            <input
              type="text"
              className="signup-form__input"
              placeholder="Ingrese su nombre"
              {...register("name", { required: "El nombre es obligatorio" })}
            />
            {errors.name && (
              <span className="signup-form__error">{errors.name.message}</span>
            )}
          </div>
          <div className="signup-form__input-group">
            <label className="signup-form__label">Apellido:</label>
            <input
              type="text"
              className="signup-form__input"
              placeholder="Ingrese su apellido"
              {...register("lastName", {
                required: "El apellido es obligatorio",
              })}
            />
            {errors.lastName && (
              <span className="signup-form__error">
                {errors.lastName.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex">
          <div className="signup-form__input-group">
            <label className="signup-form__label">DNI:</label>
            <input
              type="text"
              className="signup-form__input"
              placeholder="Ingrese su dni"
              {...register("dni", { required: "El DNI es obligatorio" })}
            />
            {errors.dni && (
              <span className="signup-form__error">{errors.dni.message}</span>
            )}
          </div>
          <div className="signup-form__input-group">
            <label className="signup-form__label">Nombre de usuario:</label>
            <input
              type="text"
              className="signup-form__input"
              placeholder="Ingrese su nombre de usuario"
              {...register("username", {
                required: "El nombre de usuario es obligatorio",
              })}
            />
            {errors.username && (
              <span className="signup-form__error">
                {errors.username.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex">
          <div className="signup-form__input-group">
            <label className="signup-form__label">Contraseña:</label>
            <input
              type="password"
              className="signup-form__input"
              placeholder="Contraseña"
              {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 6,
                  message: "La contraseña debe tener al menos 6 caracteres",
                },
              })}
            />
            {errors.password && (
              <span className="signup-form__error">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="signup-form__input-group">
            <label className="signup-form__label">Confirmar contraseña:</label>
            <input
              type="password"
              className="signup-form__input"
              placeholder="Confirmar contraseña"
              {...register("confirmPassword", {
                required: "La confirmación de la contraseña es obligatoria",
                validate: (value) =>
                  value === watch("password") || "Las contraseñas no coinciden",
              })}
            />
            {errors.confirmPassword && (
              <span className="signup-form__error">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="signup-form__submit"
          disabled={isLoading}
        >
          Registrase
        </button>
        <div className="signup-form__footer">
          <p>
            ¿Ya tienes cuenta?
            <a
              href={ROUTE_PATH.LOGIN}
              id="login-link"
              className="signup-form__login-link"
            >
              Inicia sesión aquí
            </a>
          </p>
        </div>
      </form>
      <Toaster />
    </div>
  );
};
