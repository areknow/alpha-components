import { Select } from '@alpha-components/react/select';
import React from 'react';
import Demo from '../components/demo/demo';
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
        <h3>
          The select component presents a list of options with the ability to
          select one.
        </h3>
        <hr />
        <p>
          The <code>{'<Select/>'}</code> provides the same functionality as a
          native <code>{'<select>'}</code> element, enhanced with styling.
        </p>
        <p>
          A select is used to choose an option from a provided list of items.
          Use the select for presenting options when your list is limited in
          length.
        </p>
        <Demo>
          <Select options={OPTIONS} name="fruit" label="Fruit" />
        </Demo>
      </Panel>
    </Page>
  );
};

export default SelectPage;
