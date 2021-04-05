import {
  ACTIVE_LIGHTNESS,
  COLORS,
  DARK_SCHEME,
  hexToHsl,
  hexToRgb,
  HOVER_LIGHTNESS,
  LIGHT_SCHEME,
  WHITE,
} from '@miniml/alpha-components-core/colors';
import { Theme } from '@miniml/alpha-components-core/types';
import React, { ReactNode } from 'react';
import { createGlobalStyle, css } from 'styled-components';

export interface RootProps {
  theme?: Theme;
  /**
   * By default the components will react to system color preference change.
   * If user chooses to use darkMode, system color scheme will be ignored.
   */
  darkMode?: boolean;
  children: ReactNode;
}

const customProps = (props: { [key: string]: string }) => {
  return Object.entries(props).map(
    ([property, hex]: [property: string, hex: string]) => ({
      [`--${property}`]: hex,
    })
  );
};

const GlobalStyles = createGlobalStyle<{ darkMode: boolean; theme: string }>`
  :root {
    --white: ${WHITE};
    --primary-theme-color: ${({ theme }) => COLORS[theme]};
    --primary-theme-color-rgb: ${({ theme }) => hexToRgb(COLORS[theme])};
    --primary-theme-hover-color: ${({ theme }) =>
      hexToHsl(COLORS[theme], HOVER_LIGHTNESS)};
    --primary-theme-active-color: ${({ theme }) =>
      hexToHsl(COLORS[theme], ACTIVE_LIGHTNESS)};
    ${({ darkMode }) =>
      darkMode === undefined
        ? css`
            ${customProps(LIGHT_SCHEME)}
            @media (prefers-color-scheme: dark) {
              ${customProps(DARK_SCHEME)}
            }
          `
        : darkMode
        ? customProps(DARK_SCHEME)
        : !darkMode && customProps(LIGHT_SCHEME)}
    ${customProps(COLORS)}
    min-height: 100vh;
    font-family: inherit;
  }
`;

export const Root = ({ theme, darkMode, children }: RootProps) => {
  const _theme = theme || 'magnetar';

  return (
    <div className="alpha-root" data-theme={theme} data-darkmode={darkMode}>
      <GlobalStyles darkMode={darkMode} theme={_theme} />
      {children}
    </div>
  );
};

export default Root;
