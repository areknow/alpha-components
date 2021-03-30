import { Button } from '@alpha-components/react/button';
import { Input } from '@alpha-components/react/input';
import React from 'react';
import Code from '../components/code/code';
import Demo from '../components/demo/demo';
import Page from '../components/page/page';
import Panel from '../components/panel/panel';
import Table from '../components/table/table';

const IMPORT_CODE = `import { Input } from '@miniml/alpha-components-react/input';`;

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
          styling and added functionality.
        </p>
        <Code language="language-bash">{IMPORT_CODE}</Code>
        <Demo>
          <Input placeholder="Enter text here..." />
        </Demo>
      </Panel>

      <Panel id="placeholder">
        <h2>Placeholder</h2>
        <p>
          The Input component has a <code>placeholder</code> property to set a
          descriptive message in the input before text is entered.
        </p>
        <Table
          rows={[
            {
              prop: 'placeholder',
              type: 'string',
              default: 'undefined',
              required: false,
            },
          ]}
        />
        <Demo>
          <Input placeholder="This seems to be the right place..." />
        </Demo>
      </Panel>

      <Panel id="value">
        <h2>Value</h2>
        <p>
          The Input component has a <code>value</code> property used to
          initialize the component with a default value.
        </p>
        <Table
          rows={[
            {
              prop: 'value',
              type: 'string',
              default: 'undefined',
              required: false,
            },
          ]}
        />
        <Demo>
          <Input value="A quick brown fox jumps over the lazy dog" />
        </Demo>
      </Panel>

      <Panel id="auto-complete">
        <h2>Auto complete</h2>
        <p>
          The Input component has a <code>autoComplete</code> which mirrors the
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
              type: 'string',
              default: 'undefined',
              required: false,
            },
          ]}
        />
        <Demo>
          <Input placeholder="Enter your name" autoComplete="name" />
        </Demo>
      </Panel>

      <Panel id="required">
        <h2>Required</h2>
        <p>
          The Input component has a <code>required</code> property. If set to
          true, A value is required for its form to be submittable.
        </p>
        <Table
          rows={[
            {
              prop: 'required',
              type: 'boolean',
              default: 'undefined',
              required: false,
            },
          ]}
        />
        <Demo>
          <form action="/">
            <Input placeholder="I am required." required />
            <br />
            <Button submit>Submit</Button>
          </form>
        </Demo>
      </Panel>

      <Panel id="clear">
        <h2>Clear</h2>
        <p>
          The Input component has an optional <code>clear</code> property which
          will enable the clear button to be visible and functional. It sits on
          the right edge of the element and allows the input to be cleared by
          user interaction. The clear button will only be visible if the input
          has a value.
        </p>
        <Table
          rows={[
            {
              prop: 'clear',
              type: 'boolean',
              default: 'false',
              required: false,
            },
          ]}
        />
        <Demo>
          <Input
            clear
            value="This might not be important"
            placeholder="Enter some text..."
          />
        </Demo>
      </Panel>

      <Panel id="event">
        <h2>Event</h2>
        <p>
          The Input component has a <code>onChange</code> callback that can be
          used to capture when a user interacts with the element. The callback
          returns the synthetic <code>{'<HTMLSelectElement>'}</code> event
          value. It will fire on every keystroke while the input is selected.
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
          <Input
            placeholder="Type here and check your console logs..."
            onChange={(event) => console.log(event.target.value)}
          />
        </Demo>
      </Panel>
    </Page>
  );
};

export default InputPage;
