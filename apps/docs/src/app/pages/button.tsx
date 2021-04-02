import { Button } from '@miniml/alpha-components-react/button';
import React, { useState } from 'react';
import Code from '../components/code/code';
import Demo from '../components/demo/demo';
import Page from '../components/page/page';
import Panel from '../components/panel/panel';
import Table from '../components/table/table';

const IMPORT_CODE = `import { Button } from '@miniml/alpha-components-react/button';`;

export const ButtonPage = () => {
  const [count, setCount] = useState(0);
  return (
    <Page>
      <Panel>
        <h1>Button</h1>
        <h3>The Button component is used to trigger events or navigate.</h3>
        <hr />
        <p>
          The <code>{'<Button/>'}</code> provides the same functionality as a
          native <code>{'<button>'}</code> element, enhanced with styling.
        </p>
        <p>
          While a <code>{'<button>'}</code> element should be used whenever some
          action is performed, <code>{'<a>'}</code> elements should be wrapped
          by the Button component when the user will navigate to another view.
          The button width is based on the text it holds. While being as short
          as possible, the text should clearly describe a button's action.
        </p>
        <Code language="language-bash">{IMPORT_CODE}</Code>
        <Demo>
          <Button>I like to be clicked</Button>
        </Demo>
      </Panel>

      <Panel id="variant">
        <h2>Variant</h2>
        <p>
          The Button component has two differently designed types to help the
          user distinguish between varying levels of importance based on the
          buttons function; these types are <code>{'primary'}</code> and{' '}
          <code>{'secondary'}</code>. By default, if no type property is set,
          the Button component will use <code>{'primary'}</code>.
        </p>
        <Table
          rows={[
            {
              prop: 'type',
              type: `"primary" | "secondary"`,
              default: 'primary',
              required: false,
            },
          ]}
        />
        <Demo>
          <>
            <Button>Primary button</Button>
            <Button variant="secondary">Secondary button</Button>
          </>
        </Demo>
      </Panel>

      <Panel id="size">
        <h2>Size</h2>
        <p>
          The Button component has three different sizes which can help
          illustrate various emphasis levels in your interface; these sizes are{' '}
          <code>{'small'}</code>, <code>{'medium'}</code>, and{' '}
          <code>{'large'}</code>. By default, if no size property is set, the
          Button component will use <code>{'medium'}</code>.
        </p>
        <Table
          rows={[
            {
              prop: 'size',
              type: `"small" | "medium" | "large"`,
              default: 'medium',
              required: false,
            },
          ]}
        />
        <Demo>
          <>
            <Button size="small">Small button</Button>
            <Button size="medium">Medium button</Button>
            <Button size="large">Large button</Button>
          </>
        </Demo>
      </Panel>

      <Panel id="disabled">
        <h2>Disabled</h2>
        <p>
          The Button component can be set to <code>{'disabled'}</code> to
          emulate the native disabled state of the <code>{'<button>'}</code>{' '}
          element. This will prevent a user from interacting with the Button
          component until the property is removed or set to false.
        </p>
        <Table
          rows={[
            {
              prop: 'disabled',
              type: 'boolean',
              default: 'false',
              required: false,
            },
          ]}
        />
        <Demo>
          <Button disabled>Disabled button</Button>
        </Demo>
      </Panel>

      <Panel id="submit">
        <h2>Submit</h2>
        <p>
          The Button component has a <code>submit</code> property that allows it
          to interact with forms. If set to true, the native button type
          attribute will be set to "submit". If not used, it will be set to
          "button".
        </p>
        <Table
          rows={[
            {
              prop: 'submit',
              type: 'boolean',
              default: 'false',
              required: false,
            },
          ]}
        />
        <Demo>
          <form action="/">
            <Button submit>I submit forms.</Button>
          </form>
        </Demo>
      </Panel>

      <Panel id="event">
        <h2>Event</h2>
        <p>
          The Button component has a <code>onClick</code> callback that can be
          used to capture when a user interacts with the element. The callback
          returns the synthetic <code>{'<HTMLButtonElement>'}</code> event
          value.
        </p>
        <Table
          event
          rows={[
            {
              prop: 'onClick',
              return: 'MouseEventHandler<HTMLButtonElement>',
              required: false,
            },
          ]}
        />
        <Demo>
          <Button onClick={() => setCount(count + 1)}>clicked: {count}</Button>
        </Demo>
      </Panel>
    </Page>
  );
};

export default ButtonPage;
