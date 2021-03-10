import { Checkbox } from '@alpha-components/react/checkbox';
import React from 'react';
import styles from './checkbox-demo.module.scss';

export const CheckboxDemo = () => {
  return (
    <div className={styles.demo}>
      <div>
        <Checkbox
          label="I am interested in being a volunteer"
          value="volunteer"
          onChange={(event) => {
            console.log(event);
          }}
        ></Checkbox>
      </div>
      <div>
        <Checkbox
          label="Exercitation labore mollit anim quis eu labore nostrud ex aliquip qui. Laboris eiusmod ex commodo fugiat aliquip quis magna nulla incididunt culpa adipisicing labore est veniam. Aute consequat reprehenderit laborum labore mollit nostrud quis. Nostrud cupidatat commodo sint do sint dolor."
          value="volunteer"
          onChange={(event) => {
            console.log(event);
          }}
        ></Checkbox>
      </div>
    </div>
  );
};
