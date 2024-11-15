import { useAuth } from '../core/hooks/useAuth';
import { useState } from 'react';
import { Sidebar } from '@ui/components/Sidebar';
import { LayoutDashBoard } from '@ui/layouts/LayoutDashBoard';
import { adminComponentActions } from '../core/constants/actions';
import { DashBoard } from '@ui/components/DashBoard';

export default function DashBoardContainer() {
  const { username, logoutFunction } = useAuth();
  const [currentAction, setCurrentAction] = useState<string | null>(null);

  const handleActionChange = (action: string) => {
    setCurrentAction(action);
  };

  return (
    <LayoutDashBoard>
      <DashBoard Sidebar={<Sidebar onActionChange={handleActionChange} currentAction={currentAction} componentActions={adminComponentActions} onLogout={logoutFunction} />}>
        <h2>Hola {username}</h2>
        {
          adminComponentActions.map((item) => (
            <div key={item.action}>
              {currentAction === item.action && item.component}
            </div>
          ))
        }
      </DashBoard>
    </LayoutDashBoard>
  );
}