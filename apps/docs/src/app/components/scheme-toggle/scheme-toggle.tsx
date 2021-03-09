import React, { useContext } from 'react';
import { ThemeContext } from '../../context';
import styles from './scheme-toggle.module.scss';

enum schemeMode {
  LIGHT = 'light_mode',
  DARK = 'dark_mode',
}

export const SchemeToggle = () => {
  const { themeContext, updateThemeContext } = useContext(ThemeContext);
  const handleSchemeChange = () => {
    updateThemeContext({ darkScheme: !themeContext.darkScheme });
  };

  return (
    <div className={styles.schemeToggle} onClick={handleSchemeChange}>
      <i className="material-icons">
        {themeContext.darkScheme ? schemeMode.LIGHT : schemeMode.DARK}
      </i>
    </div>
  );
};

export default SchemeToggle;
