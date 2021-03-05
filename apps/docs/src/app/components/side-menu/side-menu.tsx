import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { MENU } from './menu';
import styles from './side-menu.module.scss';

const scrollOffset = -60;

const scrollWithOffset = (element: HTMLElement) => {
  const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({ top: yCoordinate + scrollOffset, behavior: 'smooth' });
};

export const SideMenu = () => {
  const location = useLocation();

  useEffect(() => {
    const panels = document.querySelectorAll('.panel');
    const root = document.querySelector('document');
    const options = {
      root,
      rootMargin: '20px',
      threshold: 1,
    };
    const callback = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.intersectionRatio === 1) {
          window.location.hash = entry.target.id;
        }
      }
    };
    const observer = new IntersectionObserver(callback, options);
    for (const element of Array.from(panels)) {
      observer.observe(element);
    }
  }, []);

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
