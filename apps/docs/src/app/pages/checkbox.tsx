import { Checkbox } from '@alpha-components/react/checkbox';
import React from 'react';
import Page from '../components/page/page';
import Panel from '../components/panel/panel';

export const CheckboxPage = () => {
  return (
    <Page>
      <Panel>
        <h1>Checkbox</h1>
        <div>
          <Checkbox label="I am a happy person" value="person" />
        </div>
        <div>
          <Checkbox label="I am a nice person" value="person" />
        </div>
      </Panel>
    </Page>
  );
};

export default CheckboxPage;
