import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import styles from './side-menu.module.scss';

export const SideMenu = () => {
  const location = useLocation();

  return (
    <div className={styles.sideMenu}>
      <ul className={styles.primaryLevel}>
        <li>
          <NavLink
            exact
            to="/button"
            activeClassName={!location.hash ? styles.active : null}
          >
            Button
          </NavLink>
          <ul className={styles.secondaryLevel}>
            <li>
              <NavHashLink
                smooth
                to="/button#primary"
                activeClassName={styles.active}
              >
                Primary
              </NavHashLink>
            </li>
            <li>
              <NavHashLink
                smooth
                to="/button#secondary"
                activeClassName={styles.active}
              >
                Secondary
              </NavHashLink>
            </li>
            <li>
              <NavHashLink
                smooth
                to="/button#disabled"
                activeClassName={styles.active}
              >
                Disabled
              </NavHashLink>
            </li>
            <li>
              <NavHashLink
                smooth
                to="/button#selected"
                activeClassName={styles.active}
              >
                Selected
              </NavHashLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink exact activeClassName={styles.active} to="/radio">
            Radio
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName={styles.active} to="checkbox">
            Checkbox
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName={styles.active} to="select">
            Select
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName={styles.active} to="input">
            Input
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
