import { Root } from '@alpha-components/react/root';
import { Select } from '@alpha-components/react/select';
import { Theme } from '@alpha-components/workspace/types';
import React, { useState } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import styles from './app.module.scss';
import { COMPONENTS } from './components';
import { SCHEMES, THEMES } from './root-options';

export const App = () => {
  const [theme, setTheme] = useState(THEMES[0].value);
  const [darkMode, setDarkMode] = useState(undefined);

  return (
    <Root theme={theme} darkMode={darkMode}>
      <div className={styles.app}>
        <nav role="navigation">
          <ul>
            {COMPONENTS.map((component, key) => (
              <li key={key}>
                <Link to={`/${component.key}`}>{component.key}</Link>
              </li>
            ))}
          </ul>
          <div>
            <Select
              options={THEMES}
              name="theme"
              label="Theme"
              defaultValue={THEMES[0].value}
              change={(event) => {
                setTheme(Theme[event.target.value]);
              }}
            ></Select>
            <Select
              options={SCHEMES}
              name="theme"
              label="System preference"
              change={(event) => {
                setDarkMode(event.target.value === 'dark');
              }}
            ></Select>
          </div>
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
    </Root>
  );
};

export default App;
