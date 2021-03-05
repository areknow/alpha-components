import React from 'react';
import { ReactComponent as Logo } from '../../../assets/logo.svg';
import { ReactComponent as Title } from '../../../assets/title.svg';
import styles from './nav.module.scss';

export const Nav = () => {
  return (
    <nav>
      <div className={styles.brand}>
        <Logo />
        <Title />
      </div>
      <div className={styles.links}>
        <ul>
          <li>GitHub</li>
          <li>Theme</li>
          <li>FAQ</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
