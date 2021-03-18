import React from 'react';
import { ReactComponent as ToggleIcon } from '../../../assets/scheme-toggle.svg';
import { useThemeContext } from '../../context';
import styles from './scheme-toggle.module.scss';

export const SchemeToggle = () => {
  const { themeContext, updateThemeContext } = useThemeContext();
  const handleSchemeChange = () => {
    updateThemeContext({ darkScheme: !themeContext.darkScheme });
  };

  const classes = [
    styles.schemeToggle,
    themeContext.darkScheme ? styles.light : null,
  ].join(' ');

  return (
    <div className={classes} onClick={handleSchemeChange}>
      <ToggleIcon />
    </div>
  );
};

export default SchemeToggle;
