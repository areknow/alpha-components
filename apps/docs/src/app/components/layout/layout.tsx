import React, { ReactNode } from 'react';
import Nav from '../nav/nav';
import SideMenu from '../side-menu/side-menu';
import styles from './layout.module.scss';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.layout}>
      <Nav />
      <div className={styles.page}>
        <div className={styles.sideMenu}>
          <SideMenu />
        </div>
        <div className={styles.content}>
          <div className={styles.children}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
