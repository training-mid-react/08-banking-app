import { useState } from 'react';
import LayoutSignUp from '@ui/layouts/admin/LayoutSignUp.tsx';
import { useForm } from '../../core/hooks/useForm';
import { useAuth } from '../../core/hooks/useAuth';
import { SignUpForm } from '@ui/forms/SignUpForm';

export default function SignUpContainer() {
  const formInitialState = {
    username: '',
    password: '',
    confirmPassword: '',
  };
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  //@ts-ignore
  const { username, password, confirmPassword, handleChange } = useForm(formInitialState, setError);
  const { signUpFunction, token } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!username || !password || !confirmPassword) return;
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setIsLoading(true);

    try {
      await signUpFunction(username, password, token);
    } catch (error: any) {
      setError(JSON.stringify(error.message));
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <LayoutSignUp title="Crear Usuario" error={error}>
        <SignUpForm username={username} password={password} confirmPassword={confirmPassword} handleSubmit={handleSubmit} setFormField={handleChange} error={error} isLoading={isLoading} isDisabled={false} />
      </LayoutSignUp>
  );
};
