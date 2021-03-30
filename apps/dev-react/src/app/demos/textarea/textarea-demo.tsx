import { Textarea } from '@alpha-components/react/textarea';
import React from 'react';
import styles from './textarea-demo.module.scss';

export const TextareaDemo = () => {
  return (
    <div className={styles.demo}>
      <Textarea placeholder="test" value="test" />
    </div>
  );
};
