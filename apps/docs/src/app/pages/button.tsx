import { Button } from '@alpha-components/react/button';
import React from 'react';
import Page from '../components/page/page';
import Panel from '../components/panel/panel';

export const ButtonPage = () => {
  return (
    <Page>
      <Panel>
        <h1>Button</h1>
        <h3>
          The button component is used for navigating and triggering actions.
        </h3>
        <hr />
        <p>
          The button component enhances the native <pre>{'<button>'}</pre> and{' '}
          <pre>{'<a>'}</pre> elements. A button holds text, an icon or a
          combination of both. When using an icon only, it needs to be
          self-explanatory and must have an aria-label that describes what
          happens when it is clicked.'
        </p>
        <p>
          While a <pre>{'<button>'}</pre> element should be used whenever some
          action is performed, <pre>{'<a>'}</pre> elements should be wrapped by
          the Button component when the user will navigate to another view. The
          button width is based on the text it holds. While being as short as
          possible, the text should clearly describe a button's action.
        </p>
        <div className="demo">
          <Button>I like to be clicked</Button>
        </div>
      </Panel>
      <Panel id="types">
        <h2>Types</h2>
        <p>
          The Button component has two differently designed types to help the
          user distinguish between varying levels of importance based on the
          buttons function; these types are <pre>{'primary'}</pre> and{' '}
          <pre>{'secondary'}</pre>. By default, if no type property is set, the
          Button component will use <pre>{'primary'}</pre>.
        </p>
        <div className="demo">
          <Button>Primary button</Button>
          <Button type="secondary">Secondary button</Button>
        </div>
      </Panel>
      <Panel id="sizes">
        <h2>Sizes</h2>
        <p>
          The Button component has three different sizes which can help
          illustrate various emphasis levels in your interface; these sizes are{' '}
          <pre>{'small'}</pre>, <pre>{'medium'}</pre>, and <pre>{'large'}</pre>.
          By default, if no size property is set, the Button component will use{' '}
          <pre>{'medium'}</pre>.
        </p>
        <div className="demo">
          <Button size="small">Small button</Button>
          <Button size="medium">Medium button</Button>
          <Button size="large">Large button</Button>
        </div>
      </Panel>
      <Panel id="disabled">
        <h2>Disabled</h2>
        <p>
          The Button component can be set to <pre>{'disabled'}</pre> to emulate
          the native disabled state of the <pre>{'<button>'}</pre> element. This
          will prevent a user from interacting with the Button component until
          the property is removed or set to false.
        </p>
        <div className="demo">
          <Button disabled>Disabled button</Button>
        </div>
      </Panel>
    </Page>
  );
};

export default ButtonPage;
