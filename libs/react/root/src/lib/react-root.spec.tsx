import React from 'react';
import { render } from '@testing-library/react';

import ReactRoot from './react-root';

describe('ReactRoot', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactRoot />);
    expect(baseElement).toBeTruthy();
  });
});
