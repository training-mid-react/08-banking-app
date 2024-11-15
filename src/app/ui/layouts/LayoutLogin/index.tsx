import { FC, ReactNode } from 'react';
import './style.scss';

interface Props {
  children: ReactNode | ReactNode[];
  title: string;
  error: string | null;
}

const LayoutLogin: FC<Props> = ({ children, title, error }) => {
  return (
    <div className='login'>
      <h2 className='login__title'>{title}</h2>
      {children}
      <div className='message'>
        {error && <div className='login__error--message'>{error}</div>}
      </div>
    </div>
  );
};

export default LayoutLogin;
