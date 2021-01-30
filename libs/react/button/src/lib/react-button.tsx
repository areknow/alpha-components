import React, { ReactNode } from 'react';
import './react-button.module.scss';

export interface VgButtonProps {
  children: ReactNode;
}

export function VgButton(props: VgButtonProps) {
  return <button>{props.children}</button>;
}

export default VgButton;
