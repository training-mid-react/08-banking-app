import React from 'react';
import './style.scss';

interface BodyProps {
  children: React.ReactNode;
  className?: string;
}

const Body: React.FC<BodyProps> = ({ children, className }) => {
  return <p data-testid="body-component" className={className || 'body'}>{children}</p>;
};

export default Body;
