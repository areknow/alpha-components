import { Select } from '@alpha-components/react/select';
import React from 'react';
import Code from '../components/code/code';
import Demo from '../components/demo/demo';
import Page from '../components/page/page';
import Panel from '../components/panel/panel';
import Table from '../components/table/table';

const IMPORT_CODE = `import { Select } from '@miniml/alpha-components-react/select';`;

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
        <Code language="language-bash">{IMPORT_CODE}</Code>
        <Demo>
          <Select
            options={[
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
            ]}
            name="fruit"
            label="Fruit"
          />
        </Demo>
      </Panel>

      <Panel id="name">
        <h2>Name</h2>
        <p>
          The Select component has a <code>name</code> property to represent the
          name attribute on the native select element. This is used to assign
          the selected value when passing data to a server.
        </p>
        <Table
          rows={[
            {
              prop: 'name',
              type: 'string',
              default: 'undefined',
              required: true,
            },
          ]}
        />
        <Demo>
          <Select
            options={[
              {
                value: 'renault',
                label: 'Renault',
              },
              {
                value: 'peugeot',
                label: 'Peugeot',
              },
              {
                value: 'citroen',
                label: 'Citroën',
              },
            ]}
            name="cars"
            label="Cars"
          />
        </Demo>
      </Panel>

      <Panel id="label">
        <h2>Label</h2>
        <p>
          The Select component has a <code>label</code> property to represent
          the displayed unselected option when the component initializes. This
          can be changed to anything desired. The component can instead be
          initialized with a{' '}
          <a href="/select#default-value">default selected value</a>.
        </p>
        <Table
          rows={[
            {
              prop: 'label',
              type: 'string',
              default: 'undefined',
              required: true,
            },
          ]}
        />
        <Demo>
          <Select
            options={[
              {
                value: 'bourbon',
                label: 'Bourbon',
              },
              {
                value: 'rye',
                label: 'Rye',
              },
            ]}
            name="whiskey"
            label="Whiskey"
          />
        </Demo>
      </Panel>

      <Panel id="options">
        <h2>Options</h2>
        <p>
          The Select component has a <code>options</code> property which renders
          the list of options within the dropdown. The options property accepts
          an array of <code>SelectOptions</code>.
        </p>
        <Table
          rows={[
            {
              prop: 'options',
              type: 'SelectOption[]',
              default: 'undefined',
              required: true,
            },
          ]}
        />
        <Demo>
          <Select
            options={[
              {
                value: 'cat',
                label: 'Cat',
              },
              {
                value: 'dog',
                label: 'Dog',
              },
            ]}
            name="favorite-pet"
            label="Favorite pet"
          />
        </Demo>
      </Panel>

      <Panel id="auto-complete">
        <h2>Auto complete</h2>
        <p>
          The Select component has a <code>autoComplete</code> which mirrors the
          native input autocomplete attribute. The property allows developers to
          specify what permission the user agent has to provide automated
          assistance in filling out form field values. See The{' '}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete"
            target="_blank"
            rel="noreferrer"
          >
            HTML autocomplete attribute
          </a>{' '}
          for a complete list of values.
        </p>
        <Table
          rows={[
            {
              prop: 'autoComplete',
              type: 'boolean',
              default: 'undefined',
              required: false,
            },
          ]}
        />
        <Demo>
          <Select
            options={[
              {
                value: 'france',
                label: 'France',
              },
              {
                value: 'united-states',
                label: 'United States',
              },
            ]}
            name="country"
            label="Country"
            autoComplete="country"
          />
        </Demo>
      </Panel>

      <Panel id="default-value">
        <h2>Default value</h2>
        <p>
          The Select component has a <code>defaultValue</code> property which
          allows it to be initialized with a selected option. The provided
          string must match a value property within the current options array.
        </p>
        <Table
          rows={[
            {
              prop: 'defaultValue',
              type: 'string',
              default: 'undefined',
              required: true,
            },
          ]}
        />
        <Demo>
          <Select
            options={[
              {
                value: 'flat',
                label: 'Flat',
              },
              {
                value: 'sparkling',
                label: 'Sparkling',
              },
            ]}
            defaultValue="sparkling"
            name="water-selection"
            label="Water selection"
          />
        </Demo>
      </Panel>

      <Panel id="event">
        <h2>Event</h2>
        <p>
          The Radio component has a <code>onChange</code> callback that can be
          used to capture when a user interacts with the element. The callback
          returns the synthetic <code>{'<HTMLSelectElement>'}</code> event
          value.
        </p>
        <Table
          event
          rows={[
            {
              prop: 'onChange',
              return: 'ChangeEvent<HTMLSelectElement>',
              required: false,
            },
          ]}
        />
        <Demo>
          <Select
            options={[
              {
                value: 'ps',
                label: 'Play Station 4',
              },
              {
                value: 'xbox',
                label: 'XBox One X',
              },
            ]}
            name="console"
            label="Game consoles"
            onChange={(event) =>
              console.log(event.target.name, event.target.value)
            }
          />
        </Demo>
      </Panel>
    </Page>
  );
};

export default SelectPage;
