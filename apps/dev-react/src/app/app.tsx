import { VgButton } from '@very-good-components/react/button';
import React from 'react';
import { Link, Route } from 'react-router-dom';
import styles from './app.module.scss';

export function App() {
  return (
    <div className={styles.app}>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/button">Button</Link>
          </li>
        </ul>
      </div>
      <Route path="/" exact render={() => <div>home</div>} />
      <Route path="/button" exact render={() => <VgButton>button</VgButton>} />
    </div>
  );
}

export default App;
