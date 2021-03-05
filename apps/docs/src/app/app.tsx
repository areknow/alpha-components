import React from 'react';
// import { Link, Route } from 'react-router-dom';
import styles from './app.module.scss';

export function App() {
  return (
    <div className={styles.app}>
      <nav>
        <div className={styles.brand}>X</div>
        <div className={styles.links}>
          <ul>
            <li>GitHub</li>
            <li>Theme</li>
            <li>FAQ</li>
          </ul>
        </div>
      </nav>
      {/* <main></main> */}

      {/* <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            This is the generated root route.{' '}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        )}
      />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      /> */}
    </div>
  );
}

export default App;
