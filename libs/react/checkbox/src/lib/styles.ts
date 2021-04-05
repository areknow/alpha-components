import {
  COLORS,
  LIGHT_SCHEME,
  WHITE,
} from '@miniml/alpha-components-core/colors';
import styled from 'styled-components';

const defaultTheme = 'magnetar';

export const StyledAlphaCheckbox = styled.label`
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
  &:checked ~ span:before,
  &:checked ~ span:after {
    display: block;
  }
`;

export const StyledSpan = styled.span`
  box-sizing: border-box;
  height: 18px;
  width: 18px;
  background-color: transparent;
  border: 2px solid var(--grayscale-level2, ${LIGHT_SCHEME.grayscaleLevel2});
  border-radius: 2px;
  margin-right: 32px;
  margin-top: 5px;
  position: relative;
  flex-shrink: 0;
  &:before,
  &:after {
    content: '';
    position: absolute;
    display: none;
  }
  &:before {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background: var(--primary-theme-color, ${COLORS[defaultTheme]});
  }
  &:after {
    top: -11px;
    bottom: 0;
    right: 0;
    left: -6px;
    margin: auto;
    width: 10px;
    height: 5px;
    border: solid 2px var(--white, ${WHITE});
    border-right: none;
    border-top: none;
    transform: translate(3px, 4px) rotate(-45deg);
  }
`;

export const StyledDiv = styled.div`
  line-height: 1.36;
  letter-spacing: 0.21px;
  font-size: 22px;
  color: var(--grayscale-level2, ${LIGHT_SCHEME.grayscaleLevel2});
  max-width: 640px;
`;
