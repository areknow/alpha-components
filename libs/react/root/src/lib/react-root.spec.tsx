import { Theme } from '@miniml/alpha-components-core/types';
import { queryByAttribute, render } from '@testing-library/react';
import React from 'react';
import Root from './react-root';

const matchMediaMock = {
  addEventListener: () => null,
  removeEventListener: () => null,
};

describe('Root', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Root>foo</Root>);
    expect(baseElement).toBeTruthy();
  });

  it('should use theme property', () => {
    const activeTheme = Theme.RESSONANCE;
    const { baseElement } = render(<Root theme={activeTheme}>foo</Root>);
    const root = queryByAttribute('class', baseElement, 'alpha-root');
    expect(root.dataset.theme).toEqual(activeTheme);
  });

  it('should use darkMode property', () => {
    const darkMode = true;
    const { baseElement } = render(<Root darkMode={darkMode}>foo</Root>);
    const root = queryByAttribute('class', baseElement, 'alpha-root');
    expect(root.dataset.darkmode).toEqual(JSON.stringify(darkMode));
  });

  it('should use darkMode if matchMedia returns true for "prefers-colors-dark"', () => {
    const darkMode = true;
    (global as any).matchMedia = jest.fn(() => ({
      matches: true,
      ...matchMediaMock,
    }));
    const { baseElement } = render(<Root darkMode={darkMode}>foo</Root>);
    const root = queryByAttribute('class', baseElement, 'alpha-root');
    expect(root.dataset.darkmode).toEqual(JSON.stringify(darkMode));
  });

  it('should not use darkMode if matchMedia returns false for "prefers-colors-dark"', () => {
    const darkMode = false;
    (global as any).matchMedia = jest.fn(() => ({
      matches: false,
      ...matchMediaMock,
    }));
    const { baseElement } = render(<Root darkMode={darkMode}>foo</Root>);
    const root = queryByAttribute('class', baseElement, 'alpha-root');
    expect(root.dataset.darkmode).toEqual(JSON.stringify(darkMode));
  });
});
