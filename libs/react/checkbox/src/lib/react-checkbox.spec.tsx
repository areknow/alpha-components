import React from 'react';
import { render } from '@testing-library/react';

import ReactCheckbox from './react-checkbox';

describe('ReactCheckbox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactCheckbox />);
    expect(baseElement).toBeTruthy();
  });
});
