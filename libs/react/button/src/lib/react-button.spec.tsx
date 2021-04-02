import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import Button from './react-button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button>foo</Button>);
    expect(baseElement.querySelector('.alpha-button')).toBeTruthy();
    expect(baseElement).toBeTruthy();
  });

  it('should render children', () => {
    const childValue = 'foo';
    const children = <div>{childValue}</div>;
    const { queryByText } = render(<Button>foo</Button>);
    expect(children).toBeTruthy();
    expect(queryByText(childValue)).toBeTruthy();
  });

  it('should use small size property', () => {
    const { baseElement } = render(<Button size="small">foo</Button>);
    expect(baseElement.querySelector('.alpha-button')).toHaveStyle(
      'padding: 10px 20px'
    );
    expect(baseElement.querySelector('.alpha-button')).toHaveStyle(
      'font-size: 12px'
    );
  });

  it('should use medium size property', () => {
    const { baseElement } = render(<Button size="medium">foo</Button>);
    expect(baseElement.querySelector('.alpha-button')).toHaveStyle(
      'padding: 12px 40px'
    );
    expect(baseElement.querySelector('.alpha-button')).toHaveStyle(
      'font-size: 18px'
    );
  });

  it('should use large size property', () => {
    const { baseElement } = render(<Button size="large">foo</Button>);
    expect(baseElement.querySelector('.alpha-button')).toHaveStyle(
      'padding: 14px 60px'
    );
    expect(baseElement.querySelector('.alpha-button')).toHaveStyle(
      'font-size: 24px'
    );
  });

  it('should use "button" button type attribute', () => {
    const { baseElement } = render(<Button>foo</Button>);
    const type = baseElement.querySelector('button').getAttribute('type');
    expect(type).toEqual('button');
  });

  it('should use "submit" button type attribute', () => {
    const { baseElement } = render(<Button submit>foo</Button>);
    const type = baseElement.querySelector('button').getAttribute('type');
    expect(type).toEqual('submit');
  });

  it('should use "disabled" button attribute', () => {
    const { baseElement } = render(<Button disabled>foo</Button>);
    const disabled = baseElement
      .querySelector('button')
      .getAttribute('disabled');
    expect(disabled).not.toEqual(null);
  });

  it('should not use "disabled" button attribute', () => {
    const { baseElement } = render(<Button>foo</Button>);
    const disabled = baseElement
      .querySelector('button')
      .getAttribute('disabled');
    expect(disabled).toEqual(null);
  });
});
