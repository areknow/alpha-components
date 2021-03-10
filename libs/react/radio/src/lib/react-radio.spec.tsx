import React from 'react';
import { render } from '@testing-library/react';

import ReactRadio from './react-radio';

describe('ReactRadio', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactRadio />);
    expect(baseElement).toBeTruthy();
  });
});
