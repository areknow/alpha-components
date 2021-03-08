import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { Context } from '../../context';
import { MENU } from './menu';
import styles from './side-menu.module.scss';

const scrollOffset = -60;

const scrollWithOffset = (element: HTMLElement) => {
  const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({ top: yCoordinate + scrollOffset, behavior: 'smooth' });
};

export const SideMenu = () => {
  const { context } = useContext(Context);
  const sideMenuClasses = [
    styles.sideMenu,
    context.scrollNav ? styles.scrolled : null,
  ].join(' ');

  return (
    <div className={sideMenuClasses}>
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
