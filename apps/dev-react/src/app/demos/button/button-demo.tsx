import { Button } from '@miniml/alpha-components-react/button';
import React, { useState } from 'react';
import styles from './button-demo.module.scss';

export const ButtonDemo = () => {
  const [value, setValue] = useState(0);

  return (
    <div className={styles.demo}>
      <div className="primary">
        <p>Sizes</p>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>
      <div className="primary">
        <p>Types</p>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
      <div className="secondary">
        <p>Disabled</p>
        <Button variant="primary" disabled>
          Primary
        </Button>
        <Button variant="secondary" disabled>
          Secondary
        </Button>
      </div>
      <div className="callBack">
        <p>Callback</p>
        <Button
          variant="primary"
          onClick={() => {
            setValue(value + 1);
          }}
        >
          clicked: {JSON.stringify(value)}
        </Button>
      </div>
    </div>
  );
};
