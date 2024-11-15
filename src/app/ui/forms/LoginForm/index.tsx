import { Button, ButtonType } from "@ui/components/Button";
import { FC } from "react";


interface Props {
  username: string;
  password: string;
  handleSubmit: (e: React.FormEvent) => void;
  setFormField: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string | null;
  isLoading: boolean;
  isDisabled: boolean;
}

export const LoginForm: FC<Props> = ({ username, password, handleSubmit, setFormField, error, isLoading, isDisabled }) => {
  return (
    <form className='login__form' onSubmit={handleSubmit}>
      <input
        className={`login__input ${error && 'login__input--error'}`}
        name="username"
        type="text"
        placeholder="Username"
        value={username}
        onChange={setFormField}
      />
      <input
        className={`login__input ${error && 'login__input--error'}`}
        name="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={setFormField}
      />
      <Button onClick={handleSubmit} isLoading={isLoading} text="Login" isDisabled={isDisabled} type={ButtonType.SUBMIT} />
    </form>
  );
};