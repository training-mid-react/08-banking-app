import React, { useState } from "react";
import { AuthCredentials } from "@interfaces/auth";
import { useAuth } from "../core/hooks/useAuth";
import Button from "../ui/components/Button";
import Input from "../ui/components/Input";
import LoginLayout from "../ui/layouts/LoginLayout";
import Title from "../ui/components/Title";
import Body from "../ui/components/Body";
import { Link } from "react-router-dom";

const LoginContainer: React.FC = () => {
  const [credentials, setCredentials] = useState<AuthCredentials>({
    username: "",
    password: "",
  });
  const { handleLogin } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin(credentials);
  };

  return (
    <LoginLayout>
      <Title as="h1">Banca online</Title>
      <br />
      <Title as="h3">Inicia sesión</Title>
      <br />
      <Body>Bienvenido a la aplicación de banca online. Ingresa tus credenciales para comenzar.</Body>
      <form onSubmit={handleSubmit}>
        <Input type="text" id="username" name="username" value={credentials.username} onChange={handleChange} required label="Nombre de usuario" />
        <Input type="password" id="password" name="password" value={credentials.password} onChange={handleChange} required label="Contraseña" />
        <Button type="submit">Ingresar</Button>
      </form>
      <br />
      <Body>Si no tienes cuenta, puedes <Link to="/register" className="link">registrarte</Link></Body>
    </LoginLayout>
  );
};

export default LoginContainer;
