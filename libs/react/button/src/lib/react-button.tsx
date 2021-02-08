import React, { ReactNode } from 'react';
import './react-button.module.scss';

export interface AlphaButtonProps {
  children: ReactNode;
}

export function AlphaButton(props: AlphaButtonProps) {
  return <button>{props.children}</button>;
}

export default AlphaButton;
