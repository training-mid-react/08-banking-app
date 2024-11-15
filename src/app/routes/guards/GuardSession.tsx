import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface IGuardProps {
  children: ReactNode;
}
export const Guard = ({ children }: IGuardProps) => {
  const { currentUser } = { currentUser: true };

  if (!currentUser) {
    return <Navigate to='/auth' replace />;
  }

  return children;
};