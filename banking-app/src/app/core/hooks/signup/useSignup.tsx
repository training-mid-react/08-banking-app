import { IRegisterUserRequest, SignupFormData } from "@core/interfaces";
import { signup } from "@core/services";
import { encryptAES } from "@core/utils";
import { useMutation } from "@tanstack/react-query";
import {
  FieldErrors,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { ROUTE_PATH } from "../../constants/route-path";

interface SignupFormResponse {
  errors: FieldErrors<SignupFormData>;
  isLoading: boolean;
  onSubmit: (data: SignupFormData) => void;
  register: UseFormRegister<SignupFormData>;
  handleSubmit: UseFormHandleSubmit<SignupFormData, undefined>;
  watch: UseFormWatch<SignupFormData>;
}

export const useSignup = (): SignupFormResponse => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupFormData>();

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: IRegisterUserRequest) => await signup(data),
    onSuccess: (data) => {
      if (data.dinBody) {
        return <Navigate to={ROUTE_PATH.LOGIN} />;
      } else {
        toast(data.dinError.detail);
      }
    },
    onError: () => toast("Ha ocurrido un error "),
  });

  const onSubmit = (data: SignupFormData) => {
    mutate({
      firstName: data.name,
      lastName: data.lastName,
      encryptedIdentification: encryptAES(data.dni),
      username: data.username,
      encryptedPassword: encryptAES(data.password),
    });
  };

  return {
    errors,
    isLoading: isPending,
    onSubmit,
    register,
    handleSubmit,
    watch,
  };
};
