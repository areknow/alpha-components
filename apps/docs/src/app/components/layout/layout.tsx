import { Root } from '@miniml/alpha-components-react/root';
import React, { ReactNode, useState } from 'react';
import { MOBILE_BREAK_POINT } from '../../constants';
import { useThemeContext } from '../../context';
import { useScrolledNavListener } from '../../hooks/use-scrolled-nav-listener';
import { useWindowSize } from '../../hooks/use-window-size';
import Nav from '../nav/nav';
import { SchemeToggle } from '../scheme-toggle/scheme-toggle';
import SideMenu from '../side-menu/side-menu';
import styles from './layout.module.scss';

export const Layout = ({ children }: { children: ReactNode }) => {
  const scrolledNav = useScrolledNavListener();
  const { width } = useWindowSize();
  const { themeContext } = useThemeContext();
  const [sideMenuOpen, toggleSideMenu] = useState(false);
  const sideMenuColumnClasses = [
    styles.sideMenuColumn,
    sideMenuOpen ? styles.open : null,
  ].join(' ');

  return (
    <Root theme={themeContext.activeTheme} darkMode={themeContext.darkScheme}>
      <div className={styles.layout}>
        <Nav />
        {!(scrolledNav && width < MOBILE_BREAK_POINT) && (
          <div className={styles.schemeToggleContainer}>
            <SchemeToggle />
          </div>
        )}
        <div className={styles.page}>
          <div
            className={styles.sideMenuToggle}
            onClick={() => toggleSideMenu(!sideMenuOpen)}
          >
            <div />
          </div>
          <div
            onClick={() => toggleSideMenu(!sideMenuOpen)}
            className={sideMenuColumnClasses}
          >
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
