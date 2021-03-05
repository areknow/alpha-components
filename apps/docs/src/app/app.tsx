import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/layout';
import ButtonPage from './pages/button';
import RadioPage from './pages/radio';

export function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
