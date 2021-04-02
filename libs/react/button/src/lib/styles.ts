import {
  ACTIVE_LIGHTNESS,
  COLORS,
  hexToHsl,
  HOVER_LIGHTNESS,
  LIGHT_SCHEME,
} from '@miniml/alpha-components-core/colors';
import { css } from 'styled-components';

const defaultTheme = 'magnetar';

export const PRIMARY_STYLE = css`
  box-sizing: border-box;
  border-radius: 4px;
  background-color: var(--primary-theme-color, ${COLORS[defaultTheme]});
  border: 2px solid var(--primary-theme-color, ${COLORS[defaultTheme]});
  font-weight: 600;
  color: var(--white, ${LIGHT_SCHEME['--white']});
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

export const DISABLED_STYLE = css`
  opacity: 0.3;
  background-color: var(--neutral-2, ${LIGHT_SCHEME['--neutral-2']});
  border-color: var(--neutral-2, ${LIGHT_SCHEME['--neutral-2']});
  pointer-events: none;
  color: var(--white, ${LIGHT_SCHEME['--white']});
`;
