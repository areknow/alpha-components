import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import Select from './react-select';

const MOCK_OPTIONS = [
  {
    label: 'Foo',
    value: 'foo',
  },
  {
    label: 'Bar',
    value: 'bar',
  },
];

describe('Select', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Select label="foo" name="bar" options={MOCK_OPTIONS} />
    );
    expect(baseElement.querySelector('.alpha-select')).toBeTruthy();
    expect(baseElement).toBeTruthy();
  });

  it('should use label property', () => {
    const label = 'foo';
    const { queryByText } = render(
      <Select label={label} name="bar" options={MOCK_OPTIONS} />
    );
    expect(queryByText(label)).toBeTruthy();
  });

  it('should use options property', () => {
    const { queryByText } = render(
      <Select label="foo" name="bar" options={MOCK_OPTIONS} />
    );
    for (const option of MOCK_OPTIONS) {
      expect(queryByText(option.label)).toBeTruthy();
    }
  });

  it('should use name property', () => {
    const name = 'bar';
    const { baseElement } = render(
      <Select label="foo" name={name} options={MOCK_OPTIONS} />
    );
    const nameAttr = baseElement.querySelector('select').getAttribute('name');
    expect(nameAttr).toEqual(name);
  });

  it('should use autoComplete property', () => {
    const autoComplete = 'qux';
    const { baseElement } = render(
      <Select
        label="foo"
        name="bar"
        autoComplete={autoComplete}
        options={MOCK_OPTIONS}
      />
    );
    const autoCompleteAttr = baseElement
      .querySelector('select')
      .getAttribute('autocomplete');
    expect(autoCompleteAttr).toEqual(autoComplete);
  });

  it('should use defaultValue property', () => {
    const defaultValue = 'bar';
    const { baseElement } = render(
      <Select
        label="foo"
        name="bar"
        defaultValue={defaultValue}
        options={MOCK_OPTIONS}
      />
    );
    const options = baseElement.querySelectorAll('option');
    let selectedOption = '';
    for (const option of options) {
      const selected = option.getAttribute('selected');
      if (selected !== null) {
        selectedOption = option.getAttribute('value');
      }
    }
    expect(selectedOption).toEqual(defaultValue);
  });
});
