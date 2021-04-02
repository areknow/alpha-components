import { render } from '@testing-library/react';
import React from 'react';
import Checkbox from './react-checkbox';

describe('Checkbox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Checkbox label="foo" value="bar" />);
    expect(baseElement.querySelector('.alpha-checkbox')).toBeTruthy();
    expect(baseElement).toBeTruthy();
  });

  it('should use label property', () => {
    const label = 'foo';
    const { queryByText } = render(<Checkbox label={label} value="bar" />);
    expect(queryByText(label)).toBeTruthy();
  });

  it('should use value property', () => {
    const value = 'bar';
    const { baseElement } = render(<Checkbox label="foo" value={value} />);
    const valueAttr = baseElement.querySelector('input').getAttribute('value');
    expect(valueAttr).toEqual(value);
  });

  it('should be checked by default', () => {
    const { baseElement } = render(
      <Checkbox checked label="foo" value="bar" />
    );
    const checked = baseElement.querySelector('input').getAttribute('checked');
    expect(checked).not.toEqual(null);
  });

  it('should not be checked by default', () => {
    const { baseElement } = render(<Checkbox label="foo" value="bar" />);
    const checked = baseElement.querySelector('input').getAttribute('checked');
    expect(checked).toEqual(null);
  });
});
