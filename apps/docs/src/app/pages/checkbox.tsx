import { Checkbox } from '@alpha-components/react/checkbox';
import React from 'react';
import Code from '../components/code/code';
import Demo from '../components/demo/demo';
import Page from '../components/page/page';
import Panel from '../components/panel/panel';
import Table from '../components/table/table';

const IMPORT_CODE = `import { Checkbox } from '@miniml/alpha-components-react/checkbox';`;

export const CheckboxPage = () => {
  return (
    <Page>
      <Panel>
        <h1>Checkbox</h1>
        <h3>
          The checkbox component is used to select one or multiple options from
          a list.
        </h3>
        <hr />
        <p>
          The <code>{'<Checkbox/>'}</code> provides the same functionality as a
          native <code>{'<input type="checkbox">'}</code> element, enhanced with
          styling.
        </p>
        <p>Checkboxes can be used to turn an option on or off.</p>
        <Code language="language-bash">{IMPORT_CODE}</Code>
        <Demo>
          <>
            <div>
              <Checkbox label="Pizza dough" value="dough" checked />
            </div>
            <div>
              <Checkbox label="Red sauce" value="sauce" checked />
            </div>
            <div>
              <Checkbox label="Mozzarella cheese" value="cheese" />
            </div>
            <div>
              <Checkbox label="Basil" value="basil" />
            </div>
          </>
        </Demo>
      </Panel>

      <Panel id="label">
        <h2>Label</h2>
        <p>
          The Checkbox component has a customizable <code>label</code> property
          to change the displayed string next to the checkbox.
        </p>
        <Table
          rows={[
            {
              prop: 'label',
              type: 'string',
              default: 'undefined',
              required: false,
            },
          ]}
        />
        <Demo>
          <Checkbox label="I have a nice label" value="label" checked />
        </Demo>
      </Panel>

      <Panel id="value">
        <h2>Value</h2>
        <p>
          The Checkbox component has a <code>value</code> property used to set
          the output value used in the callback event.
        </p>
        <Table
          rows={[
            {
              prop: 'value',
              type: 'string | ReadonlyArray<string> | number',
              default: 'undefined',
              required: true,
            },
          ]}
        />
        <Demo>
          <>
            <div>
              <Checkbox label="Option 1" value={1} checked />
            </div>
            <div>
              <Checkbox label="Option 2" value={2} />
            </div>
          </>
        </Demo>
      </Panel>

      <Panel id="checked">
        <h2>Checked</h2>
        <p>
          The Checkbox component has a <code>checked</code> property for
          initializing the component in the checked state.
        </p>
        <Table
          rows={[
            {
              prop: 'checked',
              type: 'boolean',
              default: 'undefined',
              required: false,
            },
          ]}
        />
        <Demo>
          <>
            <div>
              <Checkbox label="I am checked by default" value="true" checked />
            </div>
            <div>
              <Checkbox label="I am ready to be checked" value="false" />
            </div>
          </>
        </Demo>
      </Panel>

      <Panel id="event">
        <h2>Event</h2>
        <p>
          The Checkbox component has a <code>onChange</code> callback that can
          be used to capture when a user interacts with the element. The
          callback returns the synthetic <code>{'<HTMLInputElement>'}</code>{' '}
          event value.
        </p>
        <Table
          event
          rows={[
            {
              prop: 'onChange',
              return: 'ChangeEvent<HTMLInputElement>',
              required: false,
            },
          ]}
        />
        <Demo>
          <>
            <div>
              <Checkbox
                label="Apple"
                value="apple"
                onChange={(event) =>
                  console.log(event.target.value, event.target.checked)
                }
              />
            </div>
            <div>
              <Checkbox
                label="Microsoft"
                value="microsoft"
                onChange={(event) =>
                  console.log(event.target.value, event.target.checked)
                }
              />
            </div>
          </>
        </Demo>
      </Panel>
    </Page>
  );
};

export default CheckboxPage;
