import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/layout';
import { ThemeProvider } from './context';
import { ROUTES } from './navigation';

export function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Switch>
          {ROUTES.map((route, key) => (
            <Route key={key} path={route.location} exact>
              {route.component}
            </Route>
          ))}
        </Switch>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
