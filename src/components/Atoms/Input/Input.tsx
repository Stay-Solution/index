import React from 'react';

const Input: React.FC<IInputProps> = ({
  placeholder,
  type,
  value,
  name,
  className,
  onChange,
}) => {
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    onChange(name, e.target.value);
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChangeInput}
      name={placeholder}
      className={`custom-input ${className ? className : ''}`}
    />
  );
};

export default Input;

interface IInputProps {
  type: 'text' | 'email' | 'password';
  placeholder: string;
  value: string;
  name: string;
  className?: string;
  onChange: (name: string, val: string) => void;
}
