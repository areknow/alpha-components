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
    // let observer = undefined;
    // const options = {
    //   root: null,
    //   rootMargin: '0px',
    // };
    // function handleIntersect(entries, observer) {
    //   console.log(entries);
    // }
    // observer = new IntersectionObserver(handleIntersect, options);
    // const boxElement = document.querySelector('body');
    // observer.observe(boxElement);
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
