import { Textarea } from '@alpha-components/react/textarea';
import React from 'react';
import Code from '../components/code/code';
import Demo from '../components/demo/demo';
import Page from '../components/page/page';
import Panel from '../components/panel/panel';

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
          <Textarea placeHolder="Enter many lines here..." />
        </Demo>
      </Panel>
    </Page>
  );
};

export default TextareaPage;
