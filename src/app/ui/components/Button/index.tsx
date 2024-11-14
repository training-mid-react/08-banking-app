import React from 'react';
import './style.scss';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled, className, type }) => {
  return (
    <button data-testid='button-component' className={className || 'custom-button'} onClick={onClick} disabled={disabled} type={type}>
      {children}
    </button>
  );
};

export default Button;
