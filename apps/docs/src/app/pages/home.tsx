import React from 'react';
import Code from '../components/code/code';
import Page from '../components/page/page';
import Panel from '../components/panel/panel';

const installationCode = `
$ npm i @miniml/alpha-components-react --save
`;
const fontCode = `
@import url('https://indestructibletype.com/fonts/Jost.css');
`;

export const HomePage = () => {
  return (
    <Page>
      <Panel>
        <h1>Alpha Components</h1>
        <p>
          React components for faster and easier web development. Quickly
          bootstrap your application with free components that are nice to look
          at, easy to use, and guaranteed to make people stick around.
        </p>

        <h2>Installation</h2>
        <p>
          Install the alpha components via npm. We take care of injecting the
          CSS needed.
        </p>
        <Code>{installationCode}</Code>
        <br />
        <br />
        <h2>Font</h2>
        <p>
          Use whatever font makes you happy. We think Jost looks very nice with
          these components.
        </p>
        <Code>{fontCode}</Code>
      </Panel>
    </Page>
  );
};
