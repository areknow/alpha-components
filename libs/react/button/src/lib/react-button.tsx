import React, { AllHTMLAttributes, ReactNode } from 'react';
import styles from './react-button.module.scss';

type NativeButtonProps = AllHTMLAttributes<HTMLButtonElement>;
export interface ButtonProps {
  type?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  children: ReactNode;
  onClick?: NativeButtonProps['onClick'];
}

export const Button = (props: ButtonProps) => {
  const classes = [
    styles.button,
    props.type ? styles[props.type] : styles.primary,
    props.size ? styles[props.size] : styles.medium,
  ].join(' ');

  return (
    <button
      className={classes}
      onClick={props.onClick}
      type="button"
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
