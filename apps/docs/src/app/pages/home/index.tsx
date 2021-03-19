import React from 'react';
import Code from '../../components/code/code';
import Page from '../../components/page/page';
import Panel from '../../components/panel/panel';
import { FONT_CODE, INSTALL_CODE, USAGE_CODE } from './constants';
import styles from './index.module.scss';

export const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Page>
        <Panel>
          <h1>Alpha Components</h1>
          <p>
            React components for faster and easier web development. Quickly
            bootstrap your application with free components that are nice to
            look at, easy to use, and guaranteed to make people stick around.
          </p>
          <hr />
          <section>
            <h2>Installation</h2>
            <p>
              Install the alpha components via npm. We take care of injecting
              the needed CSS rules.
            </p>
            <Code language="language-bash">{INSTALL_CODE}</Code>
          </section>
          <section>
            <h2>Font</h2>
            <p>
              Use whatever font makes you happy. We think{' '}
              <a href="https://indestructibletype.com/Jost.html">Jost</a> looks
              very nice with these components.
            </p>
            <Code language="language-scss">{FONT_CODE}</Code>
          </section>
          <section>
            <h2>Usage</h2>
            <p>
              Alpha components work without any additional setup, and don't
              pollute the global scope.
            </p>
            <Code language="language-tsx">{USAGE_CODE}</Code>
          </section>
        </Panel>
      </Page>
    </div>
  );
};

export default HomePage;
