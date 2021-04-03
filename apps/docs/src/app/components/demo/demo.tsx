import React, { memo, ReactNode, useState } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { copyWithTimeout } from '../../helpers';
import Prism from '../prism/prism';
import styles from './demo.module.scss';

interface DemoProps {
  children?: ReactNode;
  code?: string;
}

export const Demo = memo((props: DemoProps) => {
  const [show, toggleShow] = useState(false);
  const [copied, toggleCopied] = useState(false);
  const classes = [styles.demo, show ? styles.show : null].join(' ');
  const code = !props.code
    ? reactElementToJSXString(props.children, { showFunctions: true })
    : '';

  return (
    <div className={classes}>
      <div className={styles.preview}>{props.children}</div>
      <div className={styles.source}>
        <Prism language="language-tsx">{props.code ? props.code : code}</Prism>
      </div>
      <div className={styles.actions}>
        <button onClick={() => toggleShow(!show)}>
          {show ? 'hide' : 'show'} code
        </button>
        {show && (
          <button
            disabled={copied}
            onClick={() => copyWithTimeout(code, toggleCopied)}
          >
            {copied ? 'copied' : 'copy'}
          </button>
        )}
      </div>
    </div>
  );
});

export default Demo;
