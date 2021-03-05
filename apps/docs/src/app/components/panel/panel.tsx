import React from 'react';
import styles from './panel.module.scss';

export const Panel = ({ children }) => {
  return <div className={styles.panel}>{children}</div>;
};

export default Panel;
