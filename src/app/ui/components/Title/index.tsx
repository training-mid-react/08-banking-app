import React from 'react';
import './style.scss';

interface TitleProps {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
  color?: 'primary' | 'secondary';
}

const Title: React.FC<TitleProps> = ({ as: Tag, children, className, color }) => {
  const colorClass = color === 'primary' ? 'title-primary' : 'title-secondary';
  const combinedClassName = `${className || 'title'} ${colorClass}`;

  return <Tag data-testid="title-component" className={combinedClassName}>{children}</Tag>;
};

export default Title;
