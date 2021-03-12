import { Radio } from '@alpha-components/react/radio';
import React from 'react';
import Page from '../components/page/page';
import Panel from '../components/panel/panel';

export const RadioPage = () => {
  return (
    <Page>
      <Panel>
        <h1>Radio</h1>
        <div>
          <Radio
            label="Almond milk"
            group="milk"
            selected={true}
            onChange={(event) => {
              console.log(event);
            }}
          />
        </div>
        <div>
          <Radio
            label="Almond milk"
            group="milk"
            onChange={(event) => {
              console.log(event);
            }}
          />
        </div>
      </Panel>
    </Page>
  );
};

export default RadioPage;
