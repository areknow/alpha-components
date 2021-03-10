import React from 'react';
import styles from './react-radio.module.scss';

interface RadioProps {
  label: string;
  group: string;
  selected?: boolean;
  change: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Radio = (props: RadioProps) => {
  return (
    <label className={styles.radioContainer}>
      <input
        type="radio"
        name={props.group}
        onChange={props.change}
        defaultChecked={props.selected}
      />
      <span className={styles.radio}></span>
      <div className={styles.label}>{props.label}</div>
    </label>
  );
};

export default Radio;
