import { FC } from 'react';
import './style.scss';

export enum ButtonType {
  SUBMIT = 'submit',
  RESET = 'reset',
  BUTTON = 'button',
}

interface ButtonProps {
  onClick: any;
  isLoading: boolean;
  className?: string;
  isDisabled: boolean;
  text: string;
  type: ButtonType;
}

export const Button: FC<ButtonProps> = ({ onClick, isLoading, className = '', isDisabled, text = '' }) => {
  return (
    <button
      className={`actionContainer__button ${className} ${isDisabled ? 'actionContainer__button--disabled' : ''} ${isLoading ? 'actionContainer__button--loading' : ''}`}
      onClick={onClick}
      disabled={isDisabled || isLoading}
      type="button"
    >
      {isLoading ? (
        <svg className="actionContainer__button-spinner" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeDasharray="31.415, 31.415" strokeDashoffset="15.707" />
        </svg>
      ) : (
        text
      )}
    </button>
  );
};