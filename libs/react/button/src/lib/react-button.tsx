import React from 'react';
import './react-button.module.scss';

export interface ButtonProps {
  children: any;
}

export function Button(props: ButtonProps) {
  return <button>{props.children}</button>;
}

export default Button;
