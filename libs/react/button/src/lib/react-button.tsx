import React, { AllHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import {
  DISABLED_STYLE,
  LARGE_STYLE,
  MEDIUM_STYLE,
  PRIMARY_STYLE,
  SECONDARY_STYLE,
  SMALL_STYLE,
} from './styles';

type NativeButtonProps = AllHTMLAttributes<HTMLButtonElement>;
export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  children: ReactNode;
  submit?: boolean;
  onClick?: NativeButtonProps['onClick'];
}

const StyledButton = styled.button<ButtonProps>`
  ${PRIMARY_STYLE}
  ${({ variant }) => variant === 'secondary' && SECONDARY_STYLE}
  ${({ size }) => size === 'small' && SMALL_STYLE}
  ${({ size }) => size === 'medium' && MEDIUM_STYLE}
  ${({ size }) => size === 'large' && LARGE_STYLE}
  ${({ disabled }) => disabled && DISABLED_STYLE}
`;

export const Button = (props: ButtonProps) => {
  return (
    <StyledButton
      onClick={props.onClick}
      variant={props.variant || 'primary'}
      size={props.size || 'medium'}
      type={props.submit ? 'submit' : 'button'}
      disabled={props.disabled}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
