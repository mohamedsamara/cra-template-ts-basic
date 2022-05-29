/**
 *
 * Button
 *
 */

import { HTMLAttributes } from 'react';

enum ButtonTypes {
  'button',
  'submit',
  'reset',
  undefined,
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: ButtonTypes | any;
  label?: string;
  className?: string;
  children?: JSX.Element;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const { type = 'button', label, className, onClick, children } = props;

  return (
    <button className={className} onClick={onClick} type={type}>
      {label || children}
    </button>
  );
};

export default Button;
