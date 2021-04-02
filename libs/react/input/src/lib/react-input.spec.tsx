import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Input from './react-input';

describe('Input', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Input />);
    expect(baseElement.querySelector('.alpha-input')).toBeTruthy();
    expect(baseElement).toBeTruthy();
  });

  it('should use value property', () => {
    const value = 'foo';
    const { baseElement } = render(<Input value={value} />);
    const valueAttr = baseElement.querySelector('input').getAttribute('value');
    expect(valueAttr).toEqual(value);
  });

  it('should use autoComplete property', () => {
    const autoComplete = 'foo';
    const { baseElement } = render(<Input autoComplete={autoComplete} />);
    const autoCompleteAttr = baseElement
      .querySelector('input')
      .getAttribute('autocomplete');
    expect(autoCompleteAttr).toEqual(autoComplete);
  });

  it('should use required property', () => {
    const { baseElement } = render(<Input required />);
    const required = baseElement
      .querySelector('input')
      .getAttribute('required');
    expect(required).not.toEqual(null);
  });

  it('should not use required property', () => {
    const { baseElement } = render(<Input />);
    const required = baseElement
      .querySelector('input')
      .getAttribute('required');
    expect(required).toEqual(null);
  });

  it('should show clear button', () => {
    const { baseElement } = render(<Input clear value="foo" />);
    const button = baseElement.querySelector('button');
    expect(button).toBeTruthy();
  });

  it('should not show clear button', () => {
    const { baseElement } = render(<Input value="foo" />);
    const button = baseElement.querySelector('button');
    expect(button).not.toBeTruthy();
  });

  it('should clear input value with button click', () => {
    const { baseElement } = render(<Input clear value="foo" />);
    const input = baseElement.querySelector('input');
    const button = baseElement.querySelector('button');
    fireEvent.click(button);
    expect(input.getAttribute('value')).toBe('');
  });
});
