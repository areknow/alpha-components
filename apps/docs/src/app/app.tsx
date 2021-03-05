import React from 'react';
import styles from './app.module.scss';
import Nav from './components/nav/nav';
import SideMenu from './components/nav/side-menu/side-menu';

export function App() {
  return (
    <div className={styles.app}>
      <Nav />
      <div className={styles.page}>
        <div className={styles.sideMenu}>
          <SideMenu />
        </div>
        <div className={styles.content}>content here</div>
      </div>
    </div>
  );
}

export default App;
