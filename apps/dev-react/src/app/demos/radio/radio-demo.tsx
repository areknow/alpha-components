import { Radio } from '@alpha-components/react/radio';
import React from 'react';
import styles from './radio-demo.module.scss';

export const RadioDemo = () => {
  return (
    <div className={styles.demo}>
      <div>
        <Radio
          label="Almond milk"
          group="milk"
          selected={true}
          change={(event) => {
            console.log(event);
          }}
        />
      </div>
      <div>
        <Radio
          label="Soy milk"
          group="milk"
          change={(event) => {
            console.log(event);
          }}
        />
      </div>
    </div>
  );
};
