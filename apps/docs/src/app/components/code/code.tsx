import React, { ReactNode } from 'react';
import Prism from '../prism/prism';
import styles from './code.module.scss';

interface CodeProps {
  language: string;
  children: ReactNode;
}
export const Code = ({ language, children }: CodeProps) => {
  return (
    <div className={styles.code}>
      <Prism language={language}>{children}</Prism>
    </div>
  );
};

export default Code;
