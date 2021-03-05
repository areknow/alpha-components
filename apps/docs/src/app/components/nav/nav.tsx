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
    const onScroll = () => {
      toggleScrolledNav(window.scrollY > 90);
    };
    window.addEventListener('scroll', onScroll, true);
    return () => window.removeEventListener('scroll', onScroll, true);
  }, []);

  return (
    <nav
      className={navClasses}
      onMouseEnter={() => toggleExpandNav(true)}
      onMouseLeave={() => toggleExpandNav(false)}
    >
      <div className={styles.content}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={styles.title}>
            <Title />
          </div>
        </div>
        <div className={styles.links}>
          <ul>
            <li>
              <a
                href="https://github.com/areknow/alpha-components"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>Theme</li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
