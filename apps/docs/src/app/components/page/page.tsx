import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Page = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return children;
};

export default Page;
