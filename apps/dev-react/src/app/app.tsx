import React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import styles from './app.module.scss';
import { COMPONENTS } from './components';
import { ButtonDemo } from './demos/button/button-demo';
import { CheckboxDemo } from './demos/checkbox/checkbox-demo';
import { InputDemo } from './demos/input/input-demo';
import { RadioDemo } from './demos/radio/radio-demo';
import { SelectDemo } from './demos/select/select-demo';

export const App = () => {
  return (
    <div className={styles.app}>
      <nav role="navigation">
        <ul>
          {COMPONENTS.map((component, key) => (
            <li key={key}>
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
            <ButtonDemo></ButtonDemo>
          </Route>
          <Route path="/select" exact>
            <SelectDemo></SelectDemo>
          </Route>
          <Route path="/radio" exact>
            <RadioDemo></RadioDemo>
          </Route>
          <Route path="/checkbox" exact>
            <CheckboxDemo></CheckboxDemo>
          </Route>
          <Route path="/input" exact>
            <InputDemo></InputDemo>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
