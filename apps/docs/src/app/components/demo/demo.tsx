import React, { ReactNode, useState } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { PrismCode } from 'react-prism';
import styles from './demo.module.scss';

require('prismjs');
require('prism-themes/themes/prism-dracula.css');
require('prismjs/components/prism-typescript.min');
require('prismjs/components/prism-jsx.min');
require('prismjs/components/prism-tsx.min');

interface DemoProps {
  children: ReactNode;
  code?: string;
}

export const Demo = ({ children }: DemoProps) => {
  const [show, toggleShow] = useState(false);
  const classes = [styles.demo, show ? styles.show : null].join(' ');

  // console.log(
  //   reactElementToJSXString(children, {
  //     showFunctions: true,
  //     maxInlineAttributesLineLength: 10,
  //   })
  // );

  return (
    <div className={classes}>
      <div className={styles.preview}>{children}</div>
      <div className={styles.source}>
        <PrismCode className="language-tsx">
          {reactElementToJSXString(children, { showFunctions: true })}
        </PrismCode>
      </div>
      <div className={styles.actions}>
        <button onClick={() => toggleShow(!show)}>
          {show ? 'hide' : 'show'} code
        </button>
      </div>
    </div>
  );
};
