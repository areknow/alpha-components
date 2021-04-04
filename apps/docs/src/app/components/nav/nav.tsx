import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/logo-white.svg';
import { ReactComponent as Title } from '../../../assets/title.svg';
import { useScrolledNavListener } from '../../hooks';
import { ThemeSelector } from '../theme-selector/theme-selector';
import styles from './nav.module.scss';

export const Nav = () => {
  const scrolledNav = useScrolledNavListener();
  const [expandNav, toggleExpandNav] = useState(false);
  const [themeSelector, toggleThemeSelector] = useState(false);

  const navClasses = [
    scrolledNav ? styles.scrolled : null,
    scrolledNav && expandNav ? styles.expanded : null,
  ].join(' ');

  return (
    <nav
      className={navClasses}
      onMouseEnter={() => toggleExpandNav(true)}
      onMouseLeave={() => toggleExpandNav(false)}
    >
      <div className={styles.content}>
        <NavLink to="/" className={styles.brand}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={styles.title}>
            <Title />
          </div>
        </NavLink>
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
            <li
              onMouseEnter={() => toggleThemeSelector(true)}
              onMouseLeave={() => toggleThemeSelector(false)}
            >
              <div>Theme</div>
              {themeSelector && (
                <div className={styles.themeSelectorContainer}>
                  <ThemeSelector />
                </div>
              )}
            </li>
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
