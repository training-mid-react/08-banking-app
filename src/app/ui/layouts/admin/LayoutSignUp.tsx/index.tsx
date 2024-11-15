import { FC, ReactNode } from 'react';
import './style.scss';

interface Props {
  children: ReactNode | ReactNode[];
  title: string;
  error: string | null;
}

const LayoutSignUp: FC<Props> = ({ children, title, error }) => {
  return (
    <div className='actionContainer'>
      <h2 className='actionContainer__title'>{title}</h2>
      {children}
      <div className='actionContainer.message'>
        {error && <div className='actionContainer__error--message'>{error}</div>}
      </div>
    </div>
  );
};

export default LayoutSignUp;
