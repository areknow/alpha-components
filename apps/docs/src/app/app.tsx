import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/layout';
import { ThemeProvider } from './context';
import ButtonPage from './pages/button';
import CheckboxPage from './pages/checkbox';
import InputPage from './pages/input';
import RadioPage from './pages/radio';
import RootPage from './pages/root';
import SelectPage from './pages/select';
import TextareaPage from './pages/textarea';

export function App() {
  return (
    <ThemeProvider>
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
          <Route path="/checkbox" exact>
            <CheckboxPage />
          </Route>
          <Route path="/select" exact>
            <SelectPage />
          </Route>
          <Route path="/input" exact>
            <InputPage />
          </Route>
          <Route path="/textarea" exact>
            <TextareaPage />
          </Route>
          <Route path="/root" exact>
            <RootPage />
          </Route>
        </Switch>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
