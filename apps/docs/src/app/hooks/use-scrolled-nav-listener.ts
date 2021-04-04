import { useEffect, useState } from 'react';
import { MOBILE_BREAK_POINT } from '../constants';
import { useWindowSize } from './use-window-size';

const scrollOffsetDesktop = 90;
const scrollOffsetMobile = 20;
const eventType = 'scroll';

export const useScrolledNavListener = () => {
  const [scrolledNav, toggleScrolledNav] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    const onScroll = () => {
      const offset =
        width > MOBILE_BREAK_POINT ? scrollOffsetDesktop : scrollOffsetMobile;
      toggleScrolledNav(window.scrollY > offset);
    };
    window.addEventListener(eventType, onScroll, true);
    return () => window.removeEventListener(eventType, onScroll, true);
  }, [scrolledNav, width]);

  return scrolledNav;
};
