import React from 'react';
import './style.scss';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className = 'custom-button',
  type = 'button',
  ariaLabel
}) => {
  return (
    <button
      data-testid="button-component"
      className={className}
      onClick={onClick}
      disabled={disabled}
      type={type}
      aria-label={ariaLabel} 
      aria-disabled={disabled} 
    >
      {children}
    </button>
  );
};

export default Button;
