import React from 'react';
import { Redirect } from 'react-router-dom';
import ButtonPage from './pages/button';
import CheckboxPage from './pages/checkbox';
import InputPage from './pages/input';
import RadioPage from './pages/radio';
import RootPage from './pages/root';
import SelectPage from './pages/select';
import TextareaPage from './pages/textarea';

export const ROUTES = [
  {
    path: '/',
    component: <Redirect to="/button" />,
  },
  {
    path: '/button',
    component: <ButtonPage />,
  },
  {
    path: '/radio',
    component: <RadioPage />,
  },
  {
    path: '/checkbox',
    component: <CheckboxPage />,
  },
  {
    path: '/select',
    component: <SelectPage />,
  },
  {
    path: '/input',
    component: <InputPage />,
  },
  {
    path: '/textarea',
    component: <TextareaPage />,
  },
  {
    path: '/root',
    component: <RootPage />,
  },
];

export const MENU = [
  {
    label: 'Button',
    location: '/button',
    children: [
      {
        label: 'Types',
        location: '/button#types',
      },
      {
        label: 'Sizes',
        location: '/button#sizes',
      },
      {
        label: 'Disabled',
        location: '/button#disabled',
      },
      {
        label: 'Event',
        location: '/button#event',
      },
    ],
  },
  {
    label: 'Radio',
    location: 'radio',
  },
  {
    label: 'Checkbox',
    location: 'checkbox',
  },
  {
    label: 'Select',
    location: 'select',
  },
  {
    label: 'Input',
    location: 'input',
  },
  {
    label: 'Textarea',
    location: 'textarea',
  },
  {
    label: 'Root',
    location: 'root',
  },
];
