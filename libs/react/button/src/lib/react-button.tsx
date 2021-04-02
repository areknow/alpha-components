import React, { AllHTMLAttributes, ReactNode } from 'react';
import { StyledAlphaButton } from './styles';

type NativeButtonProps = AllHTMLAttributes<HTMLButtonElement>;
export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  children: ReactNode;
  submit?: boolean;
  onClick?: NativeButtonProps['onClick'];
}

export const Button = (props: ButtonProps) => {
  return (
    <StyledAlphaButton
      onClick={props.onClick}
      variant={props.variant || 'primary'}
      size={props.size || 'medium'}
      type={props.submit ? 'submit' : 'button'}
      disabled={props.disabled}
    >
      {props.children}
    </StyledAlphaButton>
  );
};

export default Button;
