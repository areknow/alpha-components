import React from 'react';
import ButtonPage from './pages/button';
import CheckboxPage from './pages/checkbox';
import HomePage from './pages/home';
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
        label: 'Variant',
        location: '/button#variant',
      },
      {
        label: 'Sizes',
        location: '/button#size',
      },
      {
        label: 'Disabled',
        location: '/button#disabled',
      },
      {
        label: 'Submit',
        location: '/button#submit',
      },
      {
        label: 'Event',
        location: '/button#event',
      },
    ],
  },
  {
    location: '/radio',
    label: 'Radio',
    sideMenu: true,
    component: <RadioPage />,
    children: [
      {
        label: 'Label',
        location: '/radio#label',
      },
      {
        label: 'Selected',
        location: '/radio#selected',
      },
      {
        label: 'Group',
        location: '/radio#group',
      },
      {
        label: 'Event',
        location: '/radio#event',
      },
    ],
  },
  {
    location: '/checkbox',
    label: 'Checkbox',
    sideMenu: true,
    component: <CheckboxPage />,
    children: [
      {
        label: 'Label',
        location: '/checkbox#label',
      },
      {
        label: 'Value',
        location: '/checkbox#value',
      },
      {
        label: 'Checked',
        location: '/checkbox#checked',
      },
    ],
  },
  {
    location: '/select',
    label: 'Select',
    sideMenu: true,
    component: <SelectPage />,
    children: [
      {
        label: 'Name',
        location: '/select#name',
      },
      {
        label: 'Label',
        location: '/select#label',
      },
      {
        label: 'Options',
        location: '/select#options',
      },
      {
        label: 'Auto complete',
        location: '/select#auto-complete',
      },
      {
        label: 'Default value',
        location: '/select#default-value',
      },
      {
        label: 'Event',
        location: '/select#event',
      },
    ],
  },
  {
    location: '/input',
    label: 'Input',
    sideMenu: true,
    component: <InputPage />,
    children: [
      {
        label: 'Placeholder',
        location: '/input#placeholder',
      },
      {
        label: 'Value',
        location: '/input#value',
      },
      {
        label: 'Required',
        location: '/input#required',
      },
      {
        label: 'Auto complete',
        location: '/input#auto-complete',
      },
      {
        label: 'Clear',
        location: '/input#clear',
      },
      {
        label: 'Inline',
        location: '/input#inline',
      },
      {
        label: 'Event',
        location: '/input#event',
      },
    ],
  },
  {
    location: '/textarea',
    label: 'Textarea',
    sideMenu: true,
    component: <TextareaPage />,
    children: [
      {
        label: 'Placeholder',
        location: '/textarea#placeholder',
      },
      {
        label: 'Value',
        location: '/textarea#value',
      },
      {
        label: 'Required',
        location: '/textarea#required',
      },
      {
        label: 'Auto complete',
        location: '/textarea#auto-complete',
      },
      {
        label: 'Rows',
        location: '/textarea#rows',
      },
      {
        label: 'Event',
        location: '/textarea#event',
      },
    ],
  },
  {
    location: '/root',
    label: 'Root',
    sideMenu: true,
    component: <RootPage />,
    children: [
      {
        label: 'Theme',
        location: '/root#theme',
      },
      {
        label: 'Dark mode',
        location: '/root#dark-mode',
      },
    ],
  },
];
