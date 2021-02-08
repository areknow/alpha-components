import React, { ReactNode } from 'react';
import styles from './react-button.module.scss';

export interface AlphaButtonProps {
  negative?: boolean;
  disabled?: boolean;
  type: 'secondary' | 'primary';
  children: ReactNode;
  onChange?: () => void;
}

export const AlphaButton = (props: AlphaButtonProps) => {
  const classes = [
    styles.button,
    props.type ? styles[props.type] : undefined,
    props.negative ? styles.negative : undefined,
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

export default AlphaButton;
