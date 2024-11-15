import { Navigate } from 'react-router-dom';
import { useAuth } from '../../core/hooks/useAuth';
import { ROLES } from '../../core/interfaces/user';

type ProtectedRouteProps = {
  children: React.ReactNode;
  roleRequired?: ROLES;
  temp?: boolean;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, roleRequired }) => {
  const { token, role } = useAuth();
  

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (roleRequired && role !== roleRequired && role === (ROLES.USER || ROLES.VIP)) {
    return <Navigate to="/" />;
  }

  if (roleRequired && role !== roleRequired && role === ROLES.ADMIN) {
    return <Navigate to="/dashboard" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
