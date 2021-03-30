import { Root } from '@alpha-components/react/root';
import React from 'react';
import Code from '../components/code/code';
import Demo from '../components/demo/demo';
import Page from '../components/page/page';
import Panel from '../components/panel/panel';

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
        <Code language="language-bash">{IMPORT_CODE}</Code>
        <Demo>
          <Root>I am root!</Root>
        </Demo>
      </Panel>
    </Page>
  );
};

export default RootPage;
