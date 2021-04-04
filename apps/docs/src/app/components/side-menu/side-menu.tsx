import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { MOBILE_BREAK_POINT } from '../../constants';
import { useWindowSize } from '../../hooks';
import { ROUTES } from '../../navigation';
import styles from './side-menu.module.scss';

const SCROLL_OFFSET_DESKTOP = -20;
const SCROLL_OFFSET_MOBILE = -75;

const scrollWithOffset = (element: HTMLElement, offset: number) => {
  const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({ top: yCoordinate + offset, behavior: 'smooth' });
};

export const SideMenu = () => {
  const { pathname } = useLocation();
  const { width } = useWindowSize();
  const offset =
    width > MOBILE_BREAK_POINT ? SCROLL_OFFSET_DESKTOP : SCROLL_OFFSET_MOBILE;

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
                            scrollWithOffset(element, offset)
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
