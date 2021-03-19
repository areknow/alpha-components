import React from 'react';
import ButtonPage from './pages/button';
import CheckboxPage from './pages/checkbox';
import { HomePage } from './pages/home';
import InputPage from './pages/input';
import RadioPage from './pages/radio';
import RootPage from './pages/root';
import SelectPage from './pages/select';
import TextareaPage from './pages/textarea';

export const ROUTES = [
  {
    location: '/',
    sideMenu: false,
    component: <HomePage />,
  },
  {
    location: '/button',
    label: 'Button',
    sideMenu: true,
    component: <ButtonPage />,
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
    location: 'radio',
    label: 'Radio',
    sideMenu: true,
    component: <RadioPage />,
  },
  {
    location: 'checkbox',
    label: 'Checkbox',
    sideMenu: true,
    component: <CheckboxPage />,
  },
  {
    location: 'select',
    label: 'Select',
    sideMenu: true,
    component: <SelectPage />,
  },
  {
    location: 'input',
    label: 'Input',
    sideMenu: true,
    component: <InputPage />,
  },
  {
    location: 'textarea',
    label: 'Textarea',
    sideMenu: true,
    component: <TextareaPage />,
  },
  {
    location: 'root',
    label: 'Root',
    sideMenu: true,
    component: <RootPage />,
  },
];
