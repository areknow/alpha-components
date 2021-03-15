import { COLORS } from '@alpha-components/workspace/colors';
import React, { ReactNode } from 'react';
import { createGlobalStyle, css } from 'styled-components';
import { hexToHsl, hexToRgb } from './color-helper';

export interface RootProps {
  theme?: string; // switch to enum
  /**
   * By default the components will react to system color preference change.
   * If user chooses to use darkMode, system color scheme will be ignored.
   */
  darkMode?: boolean;
  children: ReactNode;
}

const darkStyle = {
  '--neutral-0': '#000',
  '--neutral-1': '#30333c',
  '--neutral-2': '#626364',
  '--neutral-3': '#989a9b',
  '--primary-text-color': '#ffffff',
  '--primary-background-color': '#0d0d0d',
};
const lightStyle = {
  '--neutral-0': '#fff',
  '--neutral-1': '#989a9b',
  '--neutral-2': '#626364',
  '--neutral-3': '#30333c',
  '--primary-text-color': '#000000',
  '--primary-background-color': '#f7f7f7',
};

const GlobalStyles = createGlobalStyle<{ darkMode: boolean; theme: string }>`
  :root {
    --white: #fff;
    --primary-theme-color: ${({ theme }) => COLORS[theme]};
    --primary-theme-color-rgb: ${({ theme }) => hexToRgb(COLORS[theme])};
    --primary-theme-hover-color: ${({ theme }) => hexToHsl(COLORS[theme], 0.8)};
    --primary-theme-active-color: ${({ theme }) =>
      hexToHsl(COLORS[theme], 0.6)};
    ${({ darkMode }) =>
      darkMode === undefined
        ? css`
            ${lightStyle}
            @media (prefers-color-scheme: dark) {
              ${darkStyle}
            }
          `
        : darkMode
        ? darkStyle
        : !darkMode && lightStyle}
    min-height: 100vh;
`;

export function Root({ theme, darkMode, children }: RootProps) {
  const classes = [
    styles.root,
    styles[theme],
    darkMode !== undefined
      ? darkMode
        ? styles.darkMode
        : styles.lightMode
      : null,
  ].join(' ');

  return (
    <>
      <GlobalStyles darkMode={darkMode} theme={theme} />
      <div className={classes}>{children}</div>
    </>
  );
}

export default Root;
