import { COLORS, LIGHT_SCHEME } from '@miniml/alpha-components-core/colors';
import styled, { css } from 'styled-components';
import { InputProps } from './react-input';

const defaultTheme = 'magnetar';

export const StyledInput = styled.input`
  font-family: inherit;
  box-sizing: border-box;
  width: 100%;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: var(--neutral-2, ${LIGHT_SCHEME['--neutral-2']});
  padding: 16px;
  border-radius: 4px;
  border: 1px solid var(--neutral-2, ${LIGHT_SCHEME['--neutral-2']});
  background-color: var(--neutral-0, ${LIGHT_SCHEME['--neutral-0']});
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: relative;
  outline: none;
  &:focus {
    box-shadow: 0px 0px 0px 1px
      var(--primary-theme-color, ${COLORS[defaultTheme]});
    border-color: var(--primary-theme-color, ${COLORS[defaultTheme]});
  }
  &::placeholder {
    color: var(--neutral-1, ${LIGHT_SCHEME['--neutral-1']});
  }
`;

export const StyledButton = styled.button`
  all: unset;
  position: absolute;
  right: 14px;
  top: 0;
  bottom: 0;
  margin: auto;
  display: block;
  background: var(--neutral-1, ${LIGHT_SCHEME['--neutral-1']});
  width: 14px;
  height: 14px;
  border-radius: 10px;
  transform: rotate(45deg);
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    background: white;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
  }
  &:before {
    width: 2px;
    height: 60%;
  }
  &:after {
    height: 2px;
    width: 60%;
  }
`;

const CLEAR_ENABLED_STYLE = css`
  input {
    padding-right: 42px;
  }
`;

export const StyledAlphaInput = styled.div<InputProps>`
  max-width: 640px;
  position: relative;
  ${({ clear }) => clear && CLEAR_ENABLED_STYLE}
`;
