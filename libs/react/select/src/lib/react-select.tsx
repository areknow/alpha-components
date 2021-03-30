import React, { useState } from 'react';
import styles from './react-select.module.scss';

interface SelectOption {
  value: string | number;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  autoComplete?: string;
  defaultValue?: string;
  name: string;
  label: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = (props: SelectProps) => {
  const [active, setActive] = useState(false);
  const _defaultValue = props.defaultValue || 'N/A';

  const classes = `${styles.select} ${
    active || props.defaultValue ? styles.active : undefined
  }`;

  return (
    <div className={classes}>
      <select
        className={styles.select}
        defaultValue={_defaultValue}
        autoComplete={props.autoComplete}
        name={props.name}
        onChange={(event) => {
          setActive(true);
          props.onChange && props.onChange(event);
        }}
      >
        <option value="N/A" disabled>
          {props.label}
        </option>
        {props.options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
