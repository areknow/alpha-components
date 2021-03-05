import React from 'react';
import styles from './side-menu.module.scss';

export const SideMenu = () => {
  return (
    <div className={styles.sideMenu}>
      <ul className={styles.primaryLevel}>
        <li>
          <div>Button</div>
          <ul className={styles.secondaryLevel}>
            <li className={styles.active}>Primary</li>
            <li>Secondary</li>
            <li>Disabled</li>
            <li>Selected</li>
          </ul>
        </li>
        <li>
          <div>Radio</div>
        </li>
        <li>
          <div>Checkbox</div>
        </li>
        <li>
          <div>Select</div>
        </li>
        <li>
          <div>Input</div>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
