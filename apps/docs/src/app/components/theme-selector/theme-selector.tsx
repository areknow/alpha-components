import React from 'react';
import styles from './theme-selector.module.scss';

export const ThemeSelector = () => {
  return (
    <div className={styles.themeSelector}>
      <ul>
        <li className={styles.magnetar}>Magnetar</li>
        <li className={[styles.ressonance, styles.active].join(' ')}>
          Ressonance
        </li>
        <li className={styles.eventHorizon}>Event Horizon</li>
        <li className={styles.neutrino}>Neutrino</li>
      </ul>
    </div>
  );
};
