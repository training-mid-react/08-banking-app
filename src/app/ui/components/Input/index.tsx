import React from "react";
import "./style.scss";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  className?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  required?: boolean;
  label?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  type = "text",
  className,
  disabled,
  id,
  name,
  required,
  label,
}) => {
  return (
    <div className={`input-container ${value ? "has-value" : ""}`}>
      <input
        id={id}
        name={name}
        required={required}
        data-testid="input-component"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className || "custom-input"}
        disabled={disabled}
      />
      {label && <label htmlFor={id} className="input-label">{label}</label>}
    </div>
  );
};

export default Input;
