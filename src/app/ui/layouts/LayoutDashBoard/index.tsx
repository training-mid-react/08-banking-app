import { FC, ReactNode } from 'react';
import './style.scss';

interface Props {
  children: ReactNode | ReactNode[];
}

export const LayoutDashBoard: FC<Props> = ({ children }) => {
  return (
    <div className="layout-main">
      <div className="layout-main__content">
        {children}
      </div>
    </div>
  );
};