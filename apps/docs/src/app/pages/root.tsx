import React from 'react';
import Code from '../components/code/code';
import Demo from '../components/demo/demo';
import Page from '../components/page/page';
import Panel from '../components/panel/panel';
import Table from '../components/table/table';

const IMPORT_CODE = `import { Root } from '@miniml/alpha-components-react/root';`;

export const RootPage = () => {
  return (
    <Page>
      <Panel>
        <h1>Root</h1>
        <h3>
          The Root component allows users to enable common application
          functionality.
        </h3>
        <hr />
        <p>
          The <code>{'<Root/>'}</code> provides an easy way to enable features
          that are commonly setup in complex applications. This includes dynamic
          dark/light mode, color themes for components, global css variables,
          and some basic styling.
        </p>
        <p>
          It is best to wrap your entire component tree structure with the Root
          component at the main entry point of the application. This can be your{' '}
          <code>index.tsx</code> or <code>_app.tsx</code> for example.
        </p>
        <Code language="language-bash" copy>
          {IMPORT_CODE}
        </Code>
        <Demo code={'<Root>I am root!</Root>'}>I am root!</Demo>
      </Panel>

      <Panel id="theme">
        <h2>Theme</h2>
        <p>
          The Root component has a <code>theme</code> property which will
          dynamically switch the components style between the four pre created
          color themes. Any Alpha component within the document will react to
          theme changes. Currently only values from the Theme enum are
          supported.
        </p>
        <Table
          rows={[
            {
              prop: 'theme',
              type: `MAGNETAR | RESSONANCE | EVENT_HORIZON | NEUTRINO`,
              default: 'undefined',
              required: false,
            },
          ]}
        />

        <Demo code={'<Root theme={Theme.NEUTRINO}>I am root!</Root>'}>
          I am root!
        </Demo>
      </Panel>

      <Panel id="dark-mode">
        <h2>Dark mode</h2>
        <p>
          The Root component has a <code>darkMode</code> property which will
          dynamically switch the components style between dark and light color
          schemes. If no value is provided, the document will instead react to
          the system color scheme value. See the documentation on{' '}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme"
            target="_blank"
            rel="noreferrer"
          >
            prefers-color-scheme
          </a>{' '}
          to learn more.
        </p>
        <Table
          rows={[
            {
              prop: 'darkMode',
              type: 'boolean',
              default: 'undefined',
              required: false,
            },
          ]}
        />
        <Demo code={'<Root darkMode={true}>I am root!</Root>'}>I am root!</Demo>
      </Panel>
    </Page>
  );
};

export default RootPage;
