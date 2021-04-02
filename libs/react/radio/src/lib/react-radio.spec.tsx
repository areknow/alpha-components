import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Radio from './react-radio';

describe('Radio', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Radio group="foo" label="bar" selected />);
    expect(baseElement.querySelector('.alpha-radio')).toBeTruthy();
    expect(baseElement).toBeTruthy();
  });

  it('should use label property', () => {
    const label = 'foo';
    const { queryByText } = render(<Radio label={label} value="bar" />);
    expect(queryByText(label)).toBeTruthy();
  });

  it('should use group property', () => {
    const group = 'bar';
    const { baseElement } = render(<Radio label="foo" group={group} />);
    const nameAttr = baseElement.querySelector('input').getAttribute('name');
    expect(nameAttr).toEqual(group);
  });

  it('should use selected property', () => {
    const { baseElement } = render(<Radio selected label="foo" group="bar" />);
    const selected = baseElement.querySelector('input').getAttribute('checked');
    expect(selected).not.toEqual(null);
  });

  it('should use selected property', () => {
    const { baseElement } = render(<Radio label="foo" group="bar" />);
    const selected = baseElement.querySelector('input').getAttribute('checked');
    expect(selected).toEqual(null);
  });

  it('should return value on change', () => {
    const value = 'bar';
    let output = '';
    const { baseElement } = render(
      <Radio
        label="foo"
        value={value}
        onChange={(_, value) => (output = value as string)}
      />
    );
    const radio = baseElement.querySelector('input');
    fireEvent.click(radio);
    expect(output).toEqual(value);
  });
});
