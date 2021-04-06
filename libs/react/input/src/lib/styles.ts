import { COLORS, LIGHT_SCHEME } from '@miniml/alpha-components-core/colors';
import styled, { css } from 'styled-components';
import { InputProps } from './react-input';

const defaultTheme = 'magnetar';

const CLEAR_ENABLED_STYLE = css`
  input {
    padding-right: 42px;
  }
`;

const INLINE_ENABLED_STYLE = css`
  display: inline-flex;
  flex-grow: 1;
`;

export const StyledInput = styled.input`
  font-family: inherit;
  box-sizing: border-box;
  width: 100%;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: var(--primary-text-color, ${LIGHT_SCHEME.primaryTextColor});
  padding: 16px;
  border-radius: 4px;
  border: 1px solid var(--grayscale-level2, ${LIGHT_SCHEME.grayscaleLevel2});
  background-color: var(--grayscale-level0, ${LIGHT_SCHEME.grayscaleLevel0});
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
    color: var(--grayscale-level2, ${LIGHT_SCHEME.grayscaleLevel2});
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
  background: var(--grayscale-level2, ${LIGHT_SCHEME.grayscaleLevel2});
  width: 14px;
  height: 14px;
  border-radius: 10px;
  transform: rotate(45deg);
  cursor: pointer;
  &:hover {
    background: var(--grayscale-level3, ${LIGHT_SCHEME.grayscaleLevel3});
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    background: var(
      --primary-background-color,
      ${LIGHT_SCHEME.primaryBackgroundColor}
    );
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

export const StyledAlphaInput = styled.div<InputProps>`
  max-width: 640px;
  position: relative;
  ${({ clear }) => clear && CLEAR_ENABLED_STYLE}
  ${({ inline }) => inline && INLINE_ENABLED_STYLE}
`;
