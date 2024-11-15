import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LayoutLogin from '@ui/layouts/LayoutLogin';
import { useForm } from '../core/hooks/useForm';
import { useAuth } from '../core/hooks/useAuth';
import { LoginForm } from '@ui/forms/LoginForm';

export default function LoginContainer() {
  const formInitialState = {
    username: '',
    password: '',
  };
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  //@ts-ignore
  const { username, password, handleChange } = useForm(formInitialState, setError);

  const { loginFunction } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!username || !password) return;
    setIsLoading(true);
    try {
      const success = await loginFunction(username, password);
      if(success) {
        navigate('/');
      }
    } catch (error: any) {
      setError(JSON.stringify(error.message));
    } finally {
      setIsLoading(false);
    } 
  };

  return (
      <LayoutLogin title="Login" error={error}>
        <LoginForm username={username} password={password} handleSubmit={handleSubmit} setFormField={handleChange} error={error} isLoading={isLoading} isDisabled={false} />
      </LayoutLogin>
  );
};
