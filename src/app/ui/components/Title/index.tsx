import React from 'react';
import './style.scss';

interface TitleProps {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ as: Tag, children, className }) => {
  return <Tag data-testid="title-component" className={className || 'title'}>{children}</Tag>;
};

export default Title;
