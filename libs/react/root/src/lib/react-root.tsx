import React, { ReactNode } from 'react';
import styles from './react-root.module.scss';

export interface RootProps {
  theme?: string; // switch to enum
  /**
   * By default the components will react to system color preference change.
   * If user chooses to use darkMode, system color scheme will be ignored.
   */
  darkMode?: boolean;
  children: ReactNode;
}

export function Root({ theme, darkMode, children }: RootProps) {
  const classes = [
    styles.root,
    styles[theme],
    darkMode !== undefined
      ? darkMode
        ? styles.darkMode
        : styles.lightMode
      : null,
  ].join(' ');

  return <div className={classes}>{children}</div>;
}

export default Root;
