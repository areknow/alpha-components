import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { MENU } from './menu';
import styles from './side-menu.module.scss';

export const SideMenu = () => {
  const location = useLocation();

  return (
    <div className={styles.sideMenu}>
      <ul className={styles.primaryLevel}>
        {MENU.map((item, key) => (
          <li key={key}>
            <NavLink
              exact
              to={item.location}
              activeClassName={!location.hash ? styles.active : null}
            >
              {item.label}
            </NavLink>
            {item.children && (
              <ul className={styles.secondaryLevel}>
                {item.children.map((child, key) => (
                  <li key={key}>
                    <NavHashLink
                      smooth
                      to={child.location}
                      activeClassName={styles.active}
                    >
                      {child.label}
                    </NavHashLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
