import React, { ButtonHTMLAttributes } from 'react';
import './Button.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <button className="button" {...rest}>
    {children}
  </button>
);

export default Button;