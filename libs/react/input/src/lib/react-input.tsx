import React from 'react';
import styles from './react-input.module.scss';

export interface InputProps {
  placeHolder?: string;
  autoComplete?: string;
  required?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: InputProps) => {
  return (
    <div className={styles.inputContainer}>
      <input
        defaultValue={props.value}
        required={props.required}
        type="text"
        placeholder={props.placeHolder}
        autoComplete={props.autoComplete}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
