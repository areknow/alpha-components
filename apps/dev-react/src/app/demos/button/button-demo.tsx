import { Button } from '@alpha-components/react/button';
import React, { useState } from 'react';
import styles from './button-demo.module.scss';

export const ButtonDemo = () => {
  const [value, setValue] = useState(0);

  return (
    <div className={styles.demo}>
      <div className="primary">
        <p>Positive</p>
        <Button type="primary">primary</Button>
        <Button type="primary" disabled>
          disabled
        </Button>
      </div>
      <div className="secondary">
        <p>Secondary</p>
        <Button type="secondary">secondary</Button>
        <Button type="secondary" disabled>
          disabled
        </Button>
      </div>
      <div className="callBack">
        <p>Callback</p>
        <Button
          type="primary"
          onChange={() => {
            setValue(value + 1);
          }}
        >
          clicked: {JSON.stringify(value)}
        </Button>
      </div>
    </div>
  );
};
