import { Theme } from '@miniml/alpha-components-workspace/types';
import React from 'react';
import { useThemeContext } from '../../context';
import styles from './theme-selector.module.scss';
import { THEME_OPTIONS } from './themes';

export const ThemeSelector = () => {
  const { themeContext, updateThemeContext } = useThemeContext();

  const classes = (theme: Theme) => {
    return [
      styles[theme],
      theme === themeContext.activeTheme ? styles.active : null,
    ].join(' ');
  };

  return (
    <div className={styles.themeSelector}>
      <ul>
        {THEME_OPTIONS.map((item, key) => (
          <li
            key={key}
            className={classes(item.theme)}
            onClick={() => updateThemeContext({ activeTheme: item.theme })}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeSelector;
