import { Textarea } from '@alpha-components/react/textarea';
import React from 'react';
import Page from '../components/page/page';
import Panel from '../components/panel/panel';

export const TextareaPage = () => {
  return (
    <Page>
      <Panel>
        <h1>Textarea</h1>
        <Textarea placeHolder="text me back :/" />
      </Panel>
    </Page>
  );
};

export default TextareaPage;
