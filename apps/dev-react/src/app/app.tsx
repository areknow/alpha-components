import { AlphaButton } from '@alpha-components/react/button';
import React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import styles from './app.module.scss';
import { COMPONENTS } from './component';

export const App = () => {
  return (
    <div className={styles.app}>
      <nav role="navigation">
        <ul>
          {COMPONENTS.map((component) => (
            <li>
              <Link to={`/${component}`}>{component}</Link>
            </li>
          ))}
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
