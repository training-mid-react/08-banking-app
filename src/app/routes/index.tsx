import { createHashRouter } from 'react-router-dom';
import HomeContainer from '../containers/HomeContainer';
import LoginContainer from '../containers/LoginContainer';
import ProtectedRoute from './guards/ProtectedRoute';
import { ROLES } from '../core/interfaces/user';
import DashBoardContainer from '../containers/DashBoardContainer';
import { AdminProvider } from '../core/state/AdminContext';
import { UserProvider } from '../core/state/UserContext';

export const router = createHashRouter([
  {
    path: '',
    element: (
      <ProtectedRoute roleRequired={ROLES.USER}>
        <UserProvider >
          <HomeContainer />
        </UserProvider>
      </ProtectedRoute>
    ),
  },
  {
    path: 'login',
    element: <LoginContainer />,
  },
  {
    path: 'dashboard',
    element: (
      <ProtectedRoute roleRequired={ROLES.ADMIN}>
        <AdminProvider>
          <DashBoardContainer />
        </AdminProvider>
      </ProtectedRoute>
    ),
  },
]);