import React from 'react';
import { render } from '@testing-library/react';

import ReactInput from './react-input';

describe('ReactInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactInput />);
    expect(baseElement).toBeTruthy();
  });
});
