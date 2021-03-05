import React, { ReactNode } from 'react';
import styles from './panel.module.scss';

interface PanelProps {
  id?: string;
  children: ReactNode;
}

export const Panel = ({ id, children }: PanelProps) => {
  const panelClasses = [styles.panel, 'panel'].join(' ');
  return (
    <div id={id} className={panelClasses}>
      {children}
    </div>
  );
};

export default Panel;
