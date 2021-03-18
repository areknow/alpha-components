import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { MENU } from '../../navigation';
import styles from './side-menu.module.scss';

const SCROLL_OFFSET = -20;

const scrollWithOffset = (element: HTMLElement) => {
  const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({ top: yCoordinate + SCROLL_OFFSET, behavior: 'smooth' });
};

export const SideMenu = () => {
  return (
    <div className={styles.sideMenu}>
      <ul className={styles.primaryLevel}>
        {MENU.map((item, key) => (
          <li key={key}>
            <NavLink exact to={item.location} activeClassName={styles.active}>
              {item.label}
            </NavLink>
            {item.children && (
              <ul className={styles.secondaryLevel}>
                {item.children.map((child, key) => (
                  <li key={key}>
                    <NavHashLink
                      to={child.location}
                      scroll={(element: HTMLElement) =>
                        scrollWithOffset(element)
                      }
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
