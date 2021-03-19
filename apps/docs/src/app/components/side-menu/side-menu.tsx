import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { ROUTES } from '../../navigation';
import styles from './side-menu.module.scss';

const SCROLL_OFFSET = -20;

const scrollWithOffset = (element: HTMLElement) => {
  const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({ top: yCoordinate + SCROLL_OFFSET, behavior: 'smooth' });
};

export const SideMenu = () => {
  const { pathname } = useLocation();

  const secondaryMenuClasses = (menuItemLocation: string) => {
    return [
      styles.secondaryLevel,
      pathname === menuItemLocation ? styles.menuOpen : null,
    ].join(' ');
  };

  return (
    <div className={styles.sideMenu}>
      <ul className={styles.primaryLevel}>
        {ROUTES.map(
          (item, key) =>
            item.sideMenu && (
              <li key={key}>
                <NavLink
                  exact
                  to={item.location}
                  activeClassName={styles.active}
                >
                  {item.label}
                </NavLink>
                {item.children && (
                  <ul className={secondaryMenuClasses(item.location)}>
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
            )
        )}
      </ul>
    </div>
  );
};

export default SideMenu;
