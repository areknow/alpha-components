import React, { useContext } from 'react';
import { ThemeContext } from '../../context';
import { Scheme } from '../../types';
import styles from './scheme-toggle.module.scss';

export const SchemeToggle = () => {
  const { themeContext, updateThemeContext } = useContext(ThemeContext);
  const handleSchemeChange = () => {
    updateThemeContext({ darkScheme: !themeContext.darkScheme });
  };

  return (
    <div className={styles.schemeToggle} onClick={handleSchemeChange}>
      <i className="material-icons">
        {themeContext.darkScheme ? Scheme.LIGHT : Scheme.DARK}
      </i>
    </div>
  );
};

export default SchemeToggle;
