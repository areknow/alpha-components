import { COLORS, LIGHT_SCHEME } from '@miniml/alpha-components-core/colors';
import styled from 'styled-components';

const defaultTheme = 'magnetar';

export const StyledAlphaRadio = styled.label`
  display: inline-flex;
  align-items: flex-start;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-family: inherit;
`;

export const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  cursor: pointer;
  &:checked ~ div {
    color: var(--primary-text-color, ${LIGHT_SCHEME.primaryTextColor});
  }
  &:checked ~ span {
    border-color: var(--primary-theme-color, ${COLORS[defaultTheme]});
  }
  &:checked ~ span:after {
    display: block;
  }
`;
export const StyledSpan = styled.span`
  box-sizing: border-box;
  position: relative;
  height: 24px;
  width: 24px;
  background-color: transparent;
  border: 2px solid var(--grayscale-level2, ${LIGHT_SCHEME.grayscaleLevel2});
  border-radius: 50%;
  margin-right: 32px;
  margin-top: 3px;
  flex-shrink: 0;
  &:after {
    content: '';
    position: absolute;
    display: none;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--primary-theme-color, ${COLORS[defaultTheme]});
  }
`;
export const StyledDiv = styled.div`
  font-size: 22px;
  line-height: 1.36;
  letter-spacing: 0.21px;
  max-width: 640px;
  color: var(--grayscale-level2, ${LIGHT_SCHEME.grayscaleLevel2});
`;
