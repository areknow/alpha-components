import React, { AllHTMLAttributes, ReactNode } from 'react';
import { StyledAlphaButton } from './styles';

type NativeButtonProps = AllHTMLAttributes<HTMLButtonElement>;

export const variantTypeOptions = ['primary', 'secondary'] as const;
export type VariantType = typeof variantTypeOptions[number];

export const sizeTypeOptions = ['small', 'medium', 'large'] as const;
export type SizeType = typeof sizeTypeOptions[number];

export interface ButtonProps {
  variant?: VariantType;
  size?: SizeType;
  disabled?: boolean;
  children: ReactNode;
  submit?: boolean;
  onClick?: NativeButtonProps['onClick'];
}

export const Button = (props: ButtonProps) => {
  return (
    <StyledAlphaButton
      className="alpha-button"
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
