import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Scroll to hash target below sticky header, or top of page */
export function useScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const scrollToTarget = () => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
      requestAnimationFrame(() => requestAnimationFrame(scrollToTarget));
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
}
