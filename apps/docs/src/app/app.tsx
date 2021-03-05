import React from 'react';
import styles from './app.module.scss';
import Nav from './components/nav/nav';

export function App() {
  return (
    <div className={styles.app}>
      <Nav />
    </div>
  );
}

export default App;
