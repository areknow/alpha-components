import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/logo-white.svg';
import { ReactComponent as Title } from '../../../assets/title.svg';
import { useWindowSize } from '../../hooks';
import { ThemeSelector } from '../theme-selector/theme-selector';
import styles from './nav.module.scss';

const SCROLL_OFFSET_DESKTOP = 90;
const SCROLL_OFFSET_MOBILE = 20;

export const Nav = () => {
  const [scrolledNav, toggleScrolledNav] = useState(false);
  const [expandNav, toggleExpandNav] = useState(false);
  const [themeSelector, toggleThemeSelector] = useState(false);
  const { width } = useWindowSize();

  const navClasses = [
    scrolledNav ? styles.scrolled : null,
    scrolledNav && expandNav ? styles.expanded : null,
  ].join(' ');

  useEffect(() => {
    const onScroll = () => {
      const offset = width > 900 ? SCROLL_OFFSET_DESKTOP : SCROLL_OFFSET_MOBILE;
      toggleScrolledNav(window.scrollY > offset);
    };
    window.addEventListener('scroll', onScroll, true);
    return () => window.removeEventListener('scroll', onScroll, true);
  }, [width]);

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
