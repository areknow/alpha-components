import React from 'react';
import { ButtonDemo } from './demos/button/button-demo';
import { CheckboxDemo } from './demos/checkbox/checkbox-demo';
import { InputDemo } from './demos/input/input-demo';
import { RadioDemo } from './demos/radio/radio-demo';
import { SelectDemo } from './demos/select/select-demo';
import { TextareaDemo } from './demos/textarea/textarea-demo';

export const COMPONENTS = [
  {
    key: 'button',
    demo: <ButtonDemo />,
  },
  {
    key: 'select',
    demo: <SelectDemo />,
  },
  {
    key: 'radio',
    demo: <RadioDemo />,
  },
  {
    key: 'checkbox',
    demo: <CheckboxDemo />,
  },
  {
    key: 'input',
    demo: <InputDemo />,
  },
  {
    key: 'textarea',
    demo: <TextareaDemo />,
  },
];
