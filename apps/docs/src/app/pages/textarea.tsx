import { Button } from '@alpha-components/react/button';
import { Textarea } from '@alpha-components/react/textarea';
import React from 'react';
import Code from '../components/code/code';
import Demo from '../components/demo/demo';
import Page from '../components/page/page';
import Panel from '../components/panel/panel';
import Table from '../components/table/table';

const IMPORT_CODE = `import { Textarea } from '@miniml/alpha-components-react/textarea';`;

export const TextareaPage = () => {
  return (
    <Page>
      <Panel>
        <h1>Textarea</h1>
        <h3>
          The Textarea component helps users enter multiline text for storage or
          presentation.
        </h3>
        <hr />
        <p>
          The <code>{'<Textarea/>'}</code> provides the same functionality as a
          native <code>{'<textarea>'}</code> element, enhanced with styling.
        </p>
        <Code language="language-bash">{IMPORT_CODE}</Code>
        <Demo>
          <Textarea placeholder="Enter many lines here..." />
        </Demo>
      </Panel>

      <Panel id="placeholder">
        <h2>Placeholder</h2>
        <p>
          The Textarea component has a <code>placeholder</code> property to set
          a descriptive message in the input before text is entered.
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
          <Textarea placeholder="Carved symbols in a mountain hollow on the bank of an inlet irritated an eccentric person" />
        </Demo>
      </Panel>

      <Panel id="value">
        <h2>Value</h2>
        <p>
          The Textarea component has a <code>value</code> property used to
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
          <Textarea value="Signage indicating endowments for industrial diamonds annoy filth-spreading genies" />
        </Demo>
      </Panel>

      <Panel id="required">
        <h2>Required</h2>
        <p>
          The Textarea component has a <code>required</code> property. If set to
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
            <Textarea placeholder="I am required." required />
            <br />
            <Button submit>Submit</Button>
          </form>
        </Demo>
      </Panel>

      <Panel id="auto-complete">
        <h2>Auto complete</h2>
        <p>
          The Textarea component has a <code>autoComplete</code> which mirrors
          the native input autocomplete attribute. The property allows
          developers to specify what permission the user agent has to provide
          automated assistance in filling out form field values. See The{' '}
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
          <Textarea
            placeholder="Enter your complete address"
            autoComplete="street-address"
          />
        </Demo>
      </Panel>

      <Panel id="rows">
        <h2>Rows</h2>
        <p>
          The Textarea component has a <code>rows</code> property which allows
          the number of lines of text to be determined. By default, the input
          will show two rows.
        </p>
        <Table
          rows={[
            {
              prop: 'rows',
              type: 'number',
              default: '2',
              required: false,
            },
          ]}
        />
        <Demo>
          <Textarea
            rows={5}
            placeholder="There is room for 5 whole lines here"
          />
        </Demo>
      </Panel>

      <Panel id="event">
        <h2>Event</h2>
        <p>
          The Textarea component has a <code>onChange</code> callback that can
          be used to capture when a user interacts with the element. The
          callback returns the synthetic <code>{'<HTMLSelectElement>'}</code>{' '}
          event value. It will fire on every keystroke while the input is
          selected.
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
          <Textarea
            placeholder="Type here and check your console logs..."
            onChange={(event) => console.log(event.target.value)}
          />
        </Demo>
      </Panel>
    </Page>
  );
};

export default TextareaPage;
