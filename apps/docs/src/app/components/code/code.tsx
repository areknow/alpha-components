import React, { ReactNode, useState } from 'react';
import { copyWithTimeout } from '../../helpers';
import Prism from '../prism/prism';
import styles from './code.module.scss';

interface CodeProps {
  language: string;
  children: ReactNode;
  copy?: boolean;
}

export const Code = ({ language, children, copy }: CodeProps) => {
  const [copied, toggleCopied] = useState(false);

  const subtextClasses = [styles.subtext, copied ? styles.visible : null].join(
    ' '
  );

  return (
    <div
      className={styles.code}
      onClick={() => copy && copyWithTimeout(children as string, toggleCopied)}
    >
      <Prism language={language}>{children}</Prism>
      {copy && <div className={subtextClasses}>copied</div>}
    </div>
  );
};

export default Code;
