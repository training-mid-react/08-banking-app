import { FC, ReactNode } from 'react';
import './style.scss';

interface Props {
  children: ReactNode | ReactNode[];
  title: string;
}

const LayoutBase: FC<Props> = ({ children, title }) => {
  return (
    <div className='actionContainer'>
      <h2 className='actionContainer__title'>{title}</h2>
      {children}
    </div>
  );
}

export default LayoutBase;