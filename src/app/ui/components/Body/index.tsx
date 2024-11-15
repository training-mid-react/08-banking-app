import React from 'react';
import './style.scss';

interface BodyProps {
  children: React.ReactNode;
  className?: string;
  color?: 'primary' | 'secondary';
}

const Body: React.FC<BodyProps> = ({ children, className, color }) => {
  const colorClass = color === 'primary' ? 'body-primary' : 'body-secondary';
  const combinedClassName = className || `body' ${colorClass}`;
  
  return <p data-testid="body-component" className={combinedClassName}>{children}</p>;
};

export default Body;
