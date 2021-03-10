import React from 'react';
import { render } from '@testing-library/react';

import ReactTextarea from './react-textarea';

describe('ReactTextarea', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactTextarea />);
    expect(baseElement).toBeTruthy();
  });
});
