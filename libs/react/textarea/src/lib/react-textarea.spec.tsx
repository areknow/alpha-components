import { render } from '@testing-library/react';
import React from 'react';
import Textarea from './react-textarea';

describe('Textarea', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Textarea />);
    expect(baseElement.querySelector('.alpha-textarea')).toBeTruthy();
    expect(baseElement).toBeTruthy();
  });

  it('should use value property', () => {
    const value = 'foo';
    const { queryByText } = render(<Textarea value={value} />);
    expect(queryByText(value)).toBeTruthy();
  });

  it('should use rows property', () => {
    const rows = 20;
    const { baseElement } = render(<Textarea rows={rows} />);
    const rowsAttr = baseElement.querySelector('textarea').getAttribute('rows');
    expect(rowsAttr).toEqual(JSON.stringify(rows));
  });

  it('should use placeholder property', () => {
    const placeholder = 'foo';
    const { baseElement } = render(<Textarea placeholder={placeholder} />);
    const placeholderAttr = baseElement
      .querySelector('textarea')
      .getAttribute('placeholder');
    expect(placeholderAttr).toEqual(placeholder);
  });

  it('should use autocomplete property', () => {
    const autoComplete = 'foo';
    const { baseElement } = render(<Textarea autoComplete={autoComplete} />);
    const autoCompleteAttr = baseElement
      .querySelector('textarea')
      .getAttribute('autocomplete');
    expect(autoCompleteAttr).toEqual(autoComplete);
  });

  it('should use required property', () => {
    const { baseElement } = render(<Textarea required />);
    const required = baseElement
      .querySelector('textarea')
      .getAttribute('required');
    expect(required).not.toEqual(null);
  });

  it('should not use required property', () => {
    const { baseElement } = render(<Textarea />);
    const required = baseElement
      .querySelector('textarea')
      .getAttribute('required');
    expect(required).toEqual(null);
  });
});
