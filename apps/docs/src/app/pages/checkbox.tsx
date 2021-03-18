import { Checkbox } from '@alpha-components/react/checkbox';
import React from 'react';
import Demo from '../components/demo/demo';
import Page from '../components/page/page';
import Panel from '../components/panel/panel';

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
    </Page>
  );
};

export default CheckboxPage;
