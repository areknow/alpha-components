import React, { createContext, useEffect, useState } from 'react';
import { useColorScheme } from 'use-color-scheme';
import { getLocalDarkScheme, setLocalDarkScheme } from '../storage';
import { Theme } from '../types';
import { DEFAULT_STATE } from './constants';
import styles from './theme-context.module.scss';

export interface ThemeContextModel {
  darkScheme: boolean;
  activeTheme: Theme;
}

type ThemeContextType = {
  themeContext: ThemeContextModel;
  updateThemeContext: (updateData: Partial<ThemeContextModel>) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  themeContext: DEFAULT_STATE,
  updateThemeContext: () => null,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeContext, setThemeContext] = useState<ThemeContextModel>(
    DEFAULT_STATE
  );
  const { scheme } = useColorScheme();

  // Set dark scheme value from local on init
  useEffect(() => {
    const localScheme = getLocalDarkScheme();
    if (localScheme !== null) {
      updateThemeContext({ darkScheme: localScheme });
    } else {
      updateThemeContext({ darkScheme: scheme === 'dark' });
    }
  }, [scheme]);

  // Set dark scheme context on change
  useEffect(() => {
    setLocalDarkScheme(themeContext.darkScheme);
  }, [themeContext.darkScheme]);

  // Set active theme custom properties on change
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--primary-theme-color',
      `var(--${themeContext.activeTheme})`
    );
    document.documentElement.style.setProperty(
      '--primary-theme-color-rgb',
      `var(--${themeContext.activeTheme}-rgb)`
    );
  }, [themeContext.activeTheme]);

  function updateThemeContext(updateData: Partial<ThemeContextModel>) {
    setThemeContext((context) => {
      return { ...context, ...updateData };
    });
  }

  const themeClasses = [
    styles.appTheme,
    themeContext.darkScheme ? styles.darkTheme : styles.lightTheme,
  ].join(' ');

  return (
    <ThemeContext.Provider value={{ themeContext, updateThemeContext }}>
      <div className={themeClasses}>{children}</div>
    </ThemeContext.Provider>
  );
};
