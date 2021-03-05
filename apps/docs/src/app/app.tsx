import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import styles from './app.module.scss';
import Nav from './components/nav/nav';
import SideMenu from './components/side-menu/side-menu';
import ButtonPage from './pages/button';
import RadioPage from './pages/radio';

export function App() {
  return (
    <div className={styles.app}>
      <Nav />
      <div className={styles.page}>
        <div className={styles.sideMenu}>
          <SideMenu />
        </div>
        <div className={styles.content}>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/button" />
            </Route>
            <Route path="/button" exact>
              <ButtonPage />
            </Route>
            <Route path="/radio" exact>
              <RadioPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
