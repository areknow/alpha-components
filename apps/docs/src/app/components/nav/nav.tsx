import React, { useEffect, useState } from 'react';
import { ReactComponent as Logo } from '../../../assets/logo.svg';
import { ReactComponent as Title } from '../../../assets/title.svg';
import styles from './nav.module.scss';

export const Nav = () => {
  const [scrolledNav, toggleScrolledNav] = useState(false);
  const [expandNav, toggleExpandNav] = useState(false);
  const navClasses = [
    scrolledNav ? styles.scrolled : null,
    scrolledNav && expandNav ? styles.expanded : null,
  ].join(' ');

  useEffect(() => {
    const fireOnScroll = () => {
      toggleScrolledNav(window.scrollY > 90);
    };
    window.addEventListener('scroll', fireOnScroll, true);
    return () => window.removeEventListener('scroll', fireOnScroll, true);
  });

  return (
    <nav
      className={navClasses}
      onMouseEnter={() => toggleExpandNav(true)}
      onMouseLeave={() => toggleExpandNav(false)}
    >
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
      <div className={styles.mobileTrigger}>
        <Logo />
      </div>
    </nav>
  );
};

export default Nav;
