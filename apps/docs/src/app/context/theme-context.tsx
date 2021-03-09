import React, { createContext, useEffect, useState } from 'react';
import { useColorScheme } from 'use-color-scheme';
import { getLocalDarkScheme, setLocalDarkScheme } from '../storage/scheme';
import { DEFAULT_STATE } from './constants';

export interface ThemeContextModel {
  darkScheme: boolean;
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

  return (
    <ThemeContext.Provider value={{ themeContext, updateThemeContext }}>
      <div className={!themeContext.darkScheme ? 'light-theme' : 'dark-theme'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
