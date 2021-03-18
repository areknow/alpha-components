import { Input } from '@alpha-components/react/input';
import React from 'react';
import Demo from '../components/demo/demo';
import Page from '../components/page/page';
import Panel from '../components/panel/panel';

export const InputPage = () => {
  return (
    <Page>
      <Panel>
        <h1>Input</h1>
        <h3>
          The Input component helps users enter data for storage or
          presentation.
        </h3>
        <hr />
        <p>
          The <code>{'<Input/>'}</code> provides the same functionality as a
          native <code>{'<input type="text">'}</code> element, enhanced with
          styling.
        </p>
        <Demo>
          <Input placeHolder="Enter text here..." />
        </Demo>
      </Panel>
    </Page>
  );
};

export default InputPage;
