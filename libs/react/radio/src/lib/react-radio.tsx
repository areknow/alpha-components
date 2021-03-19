import React from 'react';
import styles from './react-radio.module.scss';

type RadioValue = string | string[] | number | number[];
interface RadioProps {
  label: string;
  group?: string;
  selected?: boolean;
  value?: RadioValue;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: RadioValue
  ) => void;
}

export const Radio = (props: RadioProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event, props.value);
  };

  const classes = ['alpha-radio', styles.radioContainer].join(' ');

  return (
    <label className={classes}>
      <input
        type="radio"
        name={props.group}
        onChange={handleChange}
        defaultChecked={props.selected}
      />
      <span className={styles.radio}></span>
      <div className={styles.label}>{props.label}</div>
    </label>
  );
};

export default Radio;
