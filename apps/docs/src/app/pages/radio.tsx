import { Radio } from '@alpha-components/react/radio';
import React from 'react';
import Demo from '../components/demo/demo';
import Page from '../components/page/page';
import Panel from '../components/panel/panel';

export const RadioPage = () => {
  return (
    <Page>
      <Panel>
        <h1>Radio</h1>
        <h3>
          The Radio component is used in a group to describe a set of related
          options.
        </h3>
        <hr />
        <p>
          The <code>{'<Radio/>'}</code> provides the same functionality as a
          native <code>{'<input type="radio">'}</code> element, enhanced with
          styling.
        </p>
        <p>
          Radio elements are generally used within radio-groups to describe a
          set of related options. Only one radio element can be selected at the
          same time.
        </p>
        <p>
          Radio buttons should have the most commonly used option selected by
          default.
        </p>
        <Demo>
          <>
            <div>
              <Radio label="Canine" group="animal" selected />
            </div>
            <div>
              <Radio label="Feline" group="animal" />
            </div>
          </>
        </Demo>
      </Panel>
    </Page>
  );
};

export default RadioPage;
