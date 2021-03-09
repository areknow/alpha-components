import React, { useContext } from 'react';
import { ThemeContext } from '../../context';
import { Theme } from '../../types';
import styles from './theme-selector.module.scss';
import { THEME_OPTIONS } from './themes';

export const ThemeSelector = () => {
  const { themeContext, updateThemeContext } = useContext(ThemeContext);

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
