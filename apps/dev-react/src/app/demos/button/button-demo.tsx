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
        <Button type="secondary">secondary</Button>
      </div>
      <div className="secondary">
        <p>Negative</p>
        <Button type="primary" negative>
          primary
        </Button>
        <Button type="secondary" negative>
          secondary
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
