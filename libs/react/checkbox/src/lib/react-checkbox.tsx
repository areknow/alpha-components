import React from 'react';
import styles from './react-checkbox.module.scss';

interface CheckboxProps {
  label: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = (props: CheckboxProps) => {
  return (
    <label className={styles.checkboxContainer}>
      <input type="checkbox" value={props.value} onChange={props.onChange} />
      <span className={styles.checkbox}></span>
      <div className={styles.label}>{props.label}</div>
    </label>
  );
};

export default Checkbox;
