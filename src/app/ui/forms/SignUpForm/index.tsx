import { FC } from "react";
import './style.scss';
import { Button, ButtonType } from "@ui/components/Button";

interface Props {
  username: string;
  password: string;
  confirmPassword: string;
  handleSubmit: (e: React.FormEvent) => void;
  setFormField: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string | null;
  isLoading: boolean;
  isDisabled: boolean;
}

export const SignUpForm: FC<Props> = ({ username, password, confirmPassword, handleSubmit, setFormField, error, isLoading, isDisabled }) => {
  return (
    <form className='actionContainer__form' onSubmit={handleSubmit}>
        <input
          className={`actionContainer__input ${error && 'actionContainer__input--error'}`}
          name="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={setFormField}
        />
        <input
          className={`actionContainer__input ${error && 'actionContainer__input--error'}`}
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={setFormField}
        />
        <input
          className={`actionContainer__input ${error && 'actionContainer__input--error'}`}
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={setFormField}
        />
        <Button onClick={handleSubmit} isLoading={isLoading} text="Login" isDisabled={isDisabled} type={ButtonType.SUBMIT} />

      </form>
  );
};