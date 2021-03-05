import React from 'react';
import { render } from '@testing-library/react';

import ReactSelect from './react-select';

describe('ReactSelect', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactSelect />);
    expect(baseElement).toBeTruthy();
  });
});
