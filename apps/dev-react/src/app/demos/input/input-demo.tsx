import { Input } from '@miniml/alpha-components-react/input';
import React from 'react';
import styles from './input-demo.module.scss';

export const InputDemo = () => {
  return (
    <div className={styles.demo}>
      <Input placeholder="placeholder" />
      <br />
      <Input
        placeholder="test"
        value="test"
        clear
        onChange={(x) => console.log(x)}
      />
    </div>
  );
};
