import React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import styles from './app.module.scss';
import { COMPONENTS } from './components';

export const App = () => {
  return (
    <div className={styles.app}>
      <nav role="navigation">
        <ul>
          {COMPONENTS.map((component, key) => (
            <li key={key}>
              <Link to={`/${component.key}`}>{component.key}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.content}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/button" />
          </Route>
          {COMPONENTS.map((component, key) => (
            <Route key={key} path={`/${component.key}`} exact>
              {component.demo}
            </Route>
          ))}
        </Switch>
      </div>
    </div>
  );
};

export default App;
