import React, { createContext, useEffect, useState } from 'react';
import { useColorScheme } from 'use-color-scheme';
import { getLocalDarkScheme, setLocalDarkScheme } from '../storage';
import { Theme } from '../types';
import { DEFAULT_STATE } from './constants';
import { changeFavicon } from './icon';

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
    const body = document.querySelector('body');
    if (themeContext.darkScheme) {
      body.classList.remove('light-scheme');
      body.classList.add('dark-scheme');
      changeFavicon(true);
    } else {
      body.classList.remove('dark-scheme');
      body.classList.add('light-scheme');
      changeFavicon(false);
    }
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
