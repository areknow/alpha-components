import { AlphaButton } from '@alpha-components/react/button';
import React, { useState } from 'react';
import styles from './button-demo.module.scss';

export const ButtonDemo = () => {
  const [value, setValue] = useState(0);

  return (
    <div className={styles.demo}>
      <div className="primary">
        <p>Positive</p>
        <AlphaButton type="primary">primary</AlphaButton>
        <AlphaButton type="secondary">secondary</AlphaButton>
      </div>
      <div className="secondary">
        <p>Negative</p>
        <AlphaButton type="primary" negative>
          primary
        </AlphaButton>
        <AlphaButton type="secondary" negative>
          secondary
        </AlphaButton>
      </div>
      <div className="callBack">
        <p>Callback</p>
        <AlphaButton
          type="primary"
          onChange={() => {
            setValue(value + 1);
          }}
        >
          clicked: {JSON.stringify(value)}
        </AlphaButton>
      </div>
    </div>
  );
};
