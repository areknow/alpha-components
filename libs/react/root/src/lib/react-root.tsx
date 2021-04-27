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
   * Custom theme will override the selected theme value.
   * Value must be a valid color hexadecimal format.
   */
  customTheme?: string;
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

const GlobalStyles = createGlobalStyle<{ darkMode: boolean; hex: string }>`
  :root {
    --white: ${WHITE};
    --primary-theme-color: ${({ hex }) => hex};
    --primary-theme-color-rgb: ${({ hex }) => hexToRgb(hex)};
    --primary-theme-hover-color: ${({ hex }) => hexToHsl(hex, HOVER_LIGHTNESS)};
    --primary-theme-active-color: ${({ hex }) =>
      hexToHsl(hex, ACTIVE_LIGHTNESS)};
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

export const Root = ({ theme, customTheme, darkMode, children }: RootProps) => {
  let hex: string;
  if (customTheme) {
    hex = customTheme;
  } else if (theme) {
    hex = COLORS[theme];
  } else if (!theme || !customTheme) {
    hex = COLORS['magnetar'];
  }

  return (
    <div className="alpha-root" data-theme={theme} data-darkmode={darkMode}>
      <GlobalStyles darkMode={darkMode} hex={hex} />
      {children}
    </div>
  );
};

export default Root;
