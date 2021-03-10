import React, { useState } from 'react';
import styles from './react-select.module.scss';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  options: SelectOption[];
  autoComplete: string;
  name: string;
  label: string;
  change: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = (props: SelectProps) => {
  const [active, setActive] = useState(false);

  return (
    <div className={`${styles.select} ${active ? styles.active : undefined}`}>
      <select
        className={styles.select}
        defaultValue={'N/A'}
        autoComplete={props.autoComplete}
        name={props.name}
        onChange={(event) => {
          setActive(true);
          props.change(event);
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
