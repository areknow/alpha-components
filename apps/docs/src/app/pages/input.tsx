import { Input } from '@alpha-components/react/input';
import React from 'react';
import Page from '../components/page/page';
import Panel from '../components/panel/panel';

export const InputPage = () => {
  return (
    <Page>
      <Panel>
        <h1>Input</h1>
        <Input placeHolder="please fill me with your text senpai UwU" />
      </Panel>
    </Page>
  );
};

export default InputPage;
