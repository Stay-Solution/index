import React from 'react';
import './Button.css';

const Button: React.FC<IButtonProps> = ({ onClick, text, className }) => {
  return (
    <button
      type="button"
      onClick={(e) => onClickButton(e, onClick)}
      className={`custom-btn ${className ? className : ''}`}
    >
      {text}
    </button>
  );
};

const onClickButton = (
  e: React.MouseEvent<HTMLButtonElement>,
  cb: () => void,
) => {
  e.preventDefault();
  cb();
};

export default Button;

interface IButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}
