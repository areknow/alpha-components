import { AlphaButton } from '@alpha-components/react/button';
import React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import styles from './app.module.scss';

export const App = () => {
  return (
    <div className={styles.app}>
      <nav role="navigation">
        <ul>
          <li>
            <Link to="/button">Button</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.content}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/button" />
          </Route>
          <Route path="/button" exact>
            <AlphaButton>button</AlphaButton>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
