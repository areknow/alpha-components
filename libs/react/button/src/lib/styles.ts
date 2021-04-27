import {
  ACTIVE_LIGHTNESS,
  ACTIVE_MONOCHROME_LIGHTNESS,
  BLACK,
  COLORS,
  hexToHsl,
  HOVER_LIGHTNESS,
  HOVER_MONOCHROME_LIGHTNESS,
  LIGHT_SCHEME,
  WHITE,
} from '@miniml/alpha-components-core/colors';
import styled, { css } from 'styled-components';
import { ButtonProps } from './react-button';

const defaultTheme = 'magnetar';

const PRIMARY_STYLE = css`
  box-sizing: border-box;
  border-radius: 4px;
  background-color: var(--primary-theme-color, ${COLORS[defaultTheme]});
  border: 2px solid var(--primary-theme-color, ${COLORS[defaultTheme]});
  font-weight: 600;
  color: var(--white, ${WHITE});
  text-decoration: none;
  display: inline-block;
  letter-spacing: normal;
  -webkit-appearance: none;
  font-family: inherit;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: var(
      --primary-theme-hover-color,
      ${hexToHsl(COLORS[defaultTheme], HOVER_LIGHTNESS)}
    );
    border-color: var(
      --primary-theme-hover-color,
      ${hexToHsl(COLORS[defaultTheme], HOVER_LIGHTNESS)}
    );
  }
  &:active {
    background-color: var(
      --primary-theme-active-color,
      ${hexToHsl(COLORS[defaultTheme], ACTIVE_LIGHTNESS)}
    );
    border-color: var(
      --primary-theme-active-color,
      ${hexToHsl(COLORS[defaultTheme], ACTIVE_LIGHTNESS)}
    );
  }
  &:focus {
    outline: 0;
  }
`;

export const SECONDARY_STYLE = css`
  color: var(--primary-theme-color, ${COLORS[defaultTheme]});
  background-color: transparent;
  &:hover {
    background-color: transparent;
    border-color: var(
      --primary-theme-hover-color,
      ${hexToHsl(COLORS[defaultTheme], HOVER_LIGHTNESS)}
    );
    color: var(
      --primary-theme-hover-color,
      ${hexToHsl(COLORS[defaultTheme], HOVER_LIGHTNESS)}
    );
  }
  &:active {
    border-color: var(
      --primary-theme-active-color,
      ${hexToHsl(COLORS[defaultTheme], ACTIVE_LIGHTNESS)}
    );
  }
`;

export const MONOCHROME_STYLE = css`
  background-color: ${WHITE};
  border-color: ${WHITE};
  color: ${BLACK};
  &:hover {
    background-color: ${hexToHsl(WHITE, HOVER_MONOCHROME_LIGHTNESS)};
    border-color: ${hexToHsl(WHITE, HOVER_MONOCHROME_LIGHTNESS)};
  }
  &:active {
    background-color: ${hexToHsl(WHITE, ACTIVE_MONOCHROME_LIGHTNESS)};
    border-color: ${hexToHsl(WHITE, ACTIVE_MONOCHROME_LIGHTNESS)};
  }
`;

export const MONOCHROME_SECONDARY_STYLE = css`
  background-color: ${WHITE};
  border-color: ${WHITE};
  background-color: transparent;
  color: ${WHITE};
  &:hover {
    background-color: transparent;
    border-color: ${hexToHsl(WHITE, HOVER_MONOCHROME_LIGHTNESS)};
    color: ${hexToHsl(WHITE, HOVER_MONOCHROME_LIGHTNESS)};
  }
  &:active {
    border-color: ${hexToHsl(WHITE, ACTIVE_MONOCHROME_LIGHTNESS)};
    color: ${hexToHsl(WHITE, ACTIVE_MONOCHROME_LIGHTNESS)};
  }
`;

export const DISABLED_STYLE = css`
  opacity: 0.3;
  background-color: var(--grayscale--level2, ${LIGHT_SCHEME.grayscaleLevel2});
  border-color: var(--grayscale--level2, ${LIGHT_SCHEME.grayscaleLevel2});
  pointer-events: none;
  color: var(--white, ${WHITE});
`;

export const SMALL_STYLE = css`
  padding: 10px 20px;
  font-size: 12px;
`;
export const MEDIUM_STYLE = css`
  padding: 12px 40px;
  font-size: 18px;
`;
export const LARGE_STYLE = css`
  padding: 14px 60px;
  font-size: 24px;
`;

export const StyledAlphaButton = styled.button<ButtonProps>`
  ${PRIMARY_STYLE}
  ${({ variant }) => variant === 'secondary' && SECONDARY_STYLE}
  ${({ monochrome }) => monochrome && MONOCHROME_STYLE}
  ${({ monochrome, variant }) =>
    monochrome && variant === 'secondary' && MONOCHROME_SECONDARY_STYLE}
  ${({ disabled }) => disabled && DISABLED_STYLE}
  ${({ size }) => size === 'small' && SMALL_STYLE}
  ${({ size }) => size === 'medium' && MEDIUM_STYLE}
  ${({ size }) => size === 'large' && LARGE_STYLE}
`;
