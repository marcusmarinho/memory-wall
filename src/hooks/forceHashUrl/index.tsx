import { useEffect } from 'react';

export const forceHashUrl = () => {
  useEffect(() => {
    if (!window.location.hash) {
      window.location.replace(`${window.location.pathname}#/`);
    }
  }, []);
};
