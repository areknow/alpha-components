import { Radio } from '@alpha-components/react/radio';
import React from 'react';
import Code from '../components/code/code';
import Demo from '../components/demo/demo';
import Page from '../components/page/page';
import Panel from '../components/panel/panel';
import Table from '../components/table/table';

const IMPORT_CODE = `import { Radio } from '@miniml/alpha-components-react/radio';`;

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
        <Code language="language-bash">{IMPORT_CODE}</Code>
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

      <Panel id="label">
        <h2>Label</h2>
        <p>
          The Radio component has a customizable <code>label</code> property to
          change the displayed string next to the radio circle.
        </p>
        <Table
          rows={[
            {
              prop: 'label',
              type: 'string',
              default: 'undefined',
              required: false,
            },
          ]}
        />
        <Demo>
          <Radio label="This is my label!" selected />
        </Demo>
      </Panel>

      <Panel id="selected">
        <h2>Selected</h2>
        <p>
          The Radio component has a <code>selected</code> property for
          initializing the component in the selected state. This is useful if
          you have multiple Radio components in a list and would like the most
          popular option already selected for the user.
        </p>
        <Table
          rows={[
            {
              prop: 'selected',
              type: 'boolean',
              default: 'false',
              required: false,
            },
          ]}
        />
        <Demo>
          <>
            <div>
              <Radio label="I have been chosen!" group="foo" selected />
            </div>
            <div>
              <Radio label="I have not." group="foo" />
            </div>
          </>
        </Demo>
      </Panel>

      <Panel id="group">
        <h2>Group</h2>
        <p>
          Radio components will react to each other when placed in the same{' '}
          <code>group</code>. This allows only one Radio to be selected at a
          time in the defined group.
        </p>
        <Table
          rows={[
            {
              prop: 'group',
              type: 'string',
              default: 'undefined',
              required: false,
            },
          ]}
        />
        <Demo>
          <>
            <section>
              <h3>Choose your favorite car</h3>
              <div>
                <Radio label="Jeep Cherokee TrailHawk" group="cars" />
              </div>
              <div>
                <Radio label="Audi A6" group="cars" />
              </div>
            </section>
            <section>
              <h3>Choose your favorite bike</h3>
              <div>
                <Radio label="Pivot 429 Trail" group="bikes" />
              </div>
              <div>
                <Radio label="Specialized Stumpjumper" group="bikes" />
              </div>
            </section>
          </>
        </Demo>
      </Panel>

      <Panel id="event">
        <h2>Event</h2>
        <p>
          The Radio component has a <code>onChange</code> callback that can be
          used to capture when a user interacts with the element. The callback
          returns the synthetic <code>{'<HTMLInputElement>'}</code> event value.
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
          <>
            <div>
              <Radio
                label="First option"
                group="options"
                value={1}
                onChange={(event, value) =>
                  console.log(event.target.name, value)
                }
              />
            </div>
            <div>
              <Radio
                label="Second option"
                group="options"
                value={2}
                onChange={(event, value) =>
                  console.log(event.target.name, value)
                }
              />
            </div>
          </>
        </Demo>
      </Panel>
    </Page>
  );
};

export default RadioPage;
