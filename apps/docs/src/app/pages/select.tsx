import { Select } from '@alpha-components/react/select';
import React from 'react';
import Page from '../components/page/page';
import Panel from '../components/panel/panel';

const OPTIONS = [
  {
    value: 'apple',
    label: 'Apple',
  },
  {
    value: 'banana',
    label: 'Banana',
  },
  {
    value: 'orange',
    label: 'Orange',
  },
];

export const SelectPage = () => {
  return (
    <Page>
      <Panel>
        <h1>Select</h1>
        <Select options={OPTIONS} name="fruit" label="Fruit" />
      </Panel>
    </Page>
  );
};

export default SelectPage;
