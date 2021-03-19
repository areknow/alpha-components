import React, { memo, ReactNode, useState } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import Code from '../code/code';
import styles from './demo.module.scss';

const COPY_TIMEOUT = 2000;

interface DemoProps {
  children?: ReactNode;
  code?: string;
}

export const Demo = memo((props: DemoProps) => {
  const [show, toggleShow] = useState(false);
  const [copied, toggleCopied] = useState(false);
  const classes = [styles.demo, show ? styles.show : null].join(' ');
  const code = reactElementToJSXString(props.children, { showFunctions: true });

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    toggleCopied(true);
    setTimeout(() => {
      toggleCopied(false);
    }, COPY_TIMEOUT);
  };

  return (
    <div className={classes}>
      <div className={styles.preview}>{props.children}</div>
      <div className={styles.source}>
        <Code language="language-tsx">{props.code ? props.code : code}</Code>
      </div>
      <div className={styles.actions}>
        <button onClick={() => toggleShow(!show)}>
          {show ? 'hide' : 'show'} code
        </button>
        {show && (
          <button disabled={copied} onClick={() => copyCode()}>
            {copied ? 'copied' : 'copy'}
          </button>
        )}
      </div>
    </div>
  );
});

export default Demo;
