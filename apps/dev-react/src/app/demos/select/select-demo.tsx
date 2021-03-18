import { Select } from '@alpha-components/react/select';
import React from 'react';
import styles from './select-demo.module.scss';

const OPTIONS = [
  {
    value: 'foo',
    label: 'foo',
  },
  {
    value: 'bar',
    label: 'bar',
  },
];

export const SelectDemo = () => {
  return (
    <div className={styles.demo}>
      <Select
        options={OPTIONS}
        autoComplete="address-level1"
        name="state"
        label="State"
        onChange={(event) => {
          console.log(event);
        }}
      ></Select>
    </div>
  );
};
