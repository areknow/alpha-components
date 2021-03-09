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

  useEffect(() => {
    const localScheme = getLocalDarkScheme();
    if (localScheme !== null) {
      updateThemeContext({ darkScheme: localScheme });
    } else {
      updateThemeContext({ darkScheme: scheme === 'dark' });
    }
  }, [scheme]);

  useEffect(() => {
    setLocalDarkScheme(themeContext.darkScheme);
  }, [themeContext.darkScheme]);

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
