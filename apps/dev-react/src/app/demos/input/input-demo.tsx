import { Input } from '@alpha-components/react/input';
import React from 'react';
import styles from './input-demo.module.scss';

export const InputDemo = () => {
  return (
    <div className={styles.demo}>
      <Input placeHolder="test" value="test" />
    </div>
  );
};
