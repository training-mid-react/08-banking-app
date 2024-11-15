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
  color?: 'primary' | 'secondary';
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
  color
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === "number" && parseFloat(e.target.value) < 0) {
      e.target.value = "";
    } else {
      onChange(e);
    }
  };

  return (
    <div className={`input-container ${value ? "has-value" : ""}`}>
      <input
        id={id}
        name={name}
        required={required}
        data-testid="input-component"
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={className || "custom-input"}
        disabled={disabled}
      />
      {label && (
        <label
          style={{ color: color === 'primary' ? '#6e6e6e' : '#d1d1d1' }}
          htmlFor={id}
          className="input-label"
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Input;
