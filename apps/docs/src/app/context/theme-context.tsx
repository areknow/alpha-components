import React, { createContext, useEffect, useState } from 'react';
import { useColorScheme } from 'use-color-scheme';
import { Theme } from '../types';
import { DEFAULT_STATE } from './constants';
import { toggleScheme } from './scheme';

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
  const { scheme } = useColorScheme();
  const [themeContext, setThemeContext] = useState<ThemeContextModel>(
    DEFAULT_STATE
  );

  // Set dark scheme value based on system
  useEffect(() => {
    updateThemeContext({ darkScheme: scheme === 'dark' });
  }, [scheme]);

  // Set dark scheme context on context change
  useEffect(() => {
    toggleScheme(themeContext.darkScheme);
  }, [themeContext.darkScheme]);

  function updateThemeContext(updateData: Partial<ThemeContextModel>) {
    setThemeContext((context) => {
      return { ...context, ...updateData };
    });
  }

  return (
    <ThemeContext.Provider value={{ themeContext, updateThemeContext }}>
      {children}
    </ThemeContext.Provider>
  );
};
