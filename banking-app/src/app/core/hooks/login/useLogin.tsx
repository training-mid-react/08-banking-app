import { ROUTE_PATH } from "@core/constants";
import { ILoginResponse } from "@core/interfaces";
import { login } from "@core/services/login";
import { encryptAES } from "@core/utils";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface LoginFormData {
  username: string;
  password: string;
}
export const useLogin = (
  saveLoginData: (loginData: ILoginResponse) => void
) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      if (data.dinBody) {
        toast("Exitoso.");
        // TODO: mejorar esto
        localStorage.setItem("customerId", String(data?.dinBody?.customerId));
        localStorage.setItem("token", String(data?.dinBody?.token));

        saveLoginData(data.dinBody);
        navigate(ROUTE_PATH.DASHBOARD);
      } else {
        toast(data.dinError.detail);
      }
    },
    onError: () => toast("Ha ocurrido un error "),
  });

  const onSubmit = (data: LoginFormData) => {
    mutate({
      username: data.username,
      encryptedPassword: encryptAES(data.password),
    });
    localStorage.setItem("name", String(data.username));
  };

  return { errors, onSubmit, register, handleSubmit };
};
