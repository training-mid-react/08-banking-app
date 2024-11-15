import { useSignup } from "@core/hooks/signup/useSignup";
import { ROUTE_PATH } from "@core/constants";
import { Toaster } from "react-hot-toast";

export const SignupForm = () => {
  const { errors, isLoading, onSubmit, register, handleSubmit, watch } =
    useSignup();

  return (
    <div>
      <form
        id="register-form"
        className="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>Regístrate</h2>
        <label>
          Nombre:
          <input
            type="text"
            placeholder="Ingrese su nombre"
            {...register("name", { required: "El nombre es obligatorio" })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </label>

        <label>
          Apellido:
          <input
            type="text"
            placeholder="Ingrese su apellido"
            {...register("lastName", {
              required: "El apellido es obligatorio",
            })}
          />
          {errors.lastName && <span>{errors.lastName.message}</span>}
        </label>

        <label>
          DNI:
          <input
            type="text"
            placeholder="Ingrese su dni"
            {...register("dni", {
              required: "El DNI es obligatorio",
            })}
          />
          {errors.dni && <span>{errors.dni.message}</span>}
        </label>

        <label>
          Nombre de usuario:
          <input
            type="text"
            placeholder="Ingrese su nombre de usuario"
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
            placeholder="Contraseña"
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

        <label>
          Confirmar contraseña:
          <input
            type="password"
            placeholder="Confirmar contraseña"
            {...register("confirmPassword", {
              required: "La confirmación de la contraseña es obligatoria",
              validate: (value) =>
                value === watch("password") || "Las contraseñas no coinciden",
            })}
          />
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}
        </label>

        <button type="submit" disabled={isLoading}>
          Gestion de cuentas
        </button>
        <div>
          <p>
            ¿Ya tienes cuenta?
            <a href={ROUTE_PATH.LOGIN} id="login-link">
              Inicia sesión aquí
            </a>
          </p>
        </div>
      </form>
      <Toaster />
    </div>
  );
};
