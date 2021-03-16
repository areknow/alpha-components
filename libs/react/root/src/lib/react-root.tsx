import {
  COLORS,
  DARK_SCHEME,
  LIGHT_SCHEME,
} from '@alpha-components/workspace/colors';
import React, { ReactNode } from 'react';
import { createGlobalStyle, css } from 'styled-components';
import { hexToHsl, hexToRgb } from './hex-helpers';

const HOVER_LIGHTNESS = 0.8;
const ACTIVE_LIGHTNESS = 0.6;

export interface RootProps {
  theme?: string; // switch to enum
  /**
   * By default the components will react to system color preference change.
   * If user chooses to use darkMode, system color scheme will be ignored.
   */
  darkMode?: boolean;
  children: ReactNode;
}

const customProps = () => {
  return Object.entries(COLORS).map(([property, hex]) => ({
    [`--${property}`]: hex,
  }));
};

const GlobalStyles = createGlobalStyle<{ darkMode: boolean; theme: string }>`
  :root {
    --white: #fff;
    --primary-theme-color: ${({ theme }) => COLORS[theme]};
    --primary-theme-color-rgb: ${({ theme }) => hexToRgb(COLORS[theme])};
    --primary-theme-hover-color: ${({ theme }) =>
      hexToHsl(COLORS[theme], HOVER_LIGHTNESS)};
    --primary-theme-active-color: ${({ theme }) =>
      hexToHsl(COLORS[theme], ACTIVE_LIGHTNESS)};
    ${({ darkMode }) =>
      darkMode === undefined
        ? css`
            ${LIGHT_SCHEME}
            @media (prefers-color-scheme: dark) {
              ${DARK_SCHEME}
            }
          `
        : darkMode
        ? DARK_SCHEME
        : !darkMode && LIGHT_SCHEME}
    ${customProps()}
    min-height: 100vh;
    font-family: inherit;
  }
`;

export const Root = ({ theme, darkMode, children }: RootProps) => {
  const _theme = theme || 'magnetar';

  return (
    <>
      <GlobalStyles darkMode={darkMode} theme={_theme} />
      {children}
    </>
  );
};

export default Root;
