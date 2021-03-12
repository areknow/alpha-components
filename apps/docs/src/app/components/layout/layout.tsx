import { Root } from '@alpha-components/react/root';
import React, { ReactNode, useContext } from 'react';
import { ThemeContext } from '../../context';
import Nav from '../nav/nav';
import { SchemeToggle } from '../scheme-toggle/scheme-toggle';
import SideMenu from '../side-menu/side-menu';
import styles from './layout.module.scss';

export const Layout = ({ children }: { children: ReactNode }) => {
  const { themeContext } = useContext(ThemeContext);

  return (
    <Root theme={themeContext.activeTheme} darkMode={themeContext.darkScheme}>
      <div className={styles.layout}>
        <Nav />
        <div className={styles.schemeToggleContainer}>
          <SchemeToggle />
        </div>
        <div className={styles.page}>
          <div className={styles.sideMenuColumn}>
            <div className={styles.sideMenuContainer}>
              <SideMenu />
            </div>
          </div>
          <div className={styles.contentColumn}>
            <div className={styles.children}>{children}</div>
          </div>
        </div>
      </div>
    </Root>
  );
};

export default Layout;
