import React, { ReactNode } from 'react';
import styles from './react-button.module.scss';

export interface ButtonProps {
  type?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  children: ReactNode;
  onChange?: () => void;
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
      onClick={props.onChange}
      type="button"
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
