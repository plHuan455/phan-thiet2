import { useEffect } from 'react';

const tabletUpMediaQuery = window.matchMedia('(min-width: 992px)');

export default function useDetectHeader(open: boolean, closeCallback?: () => void) {
  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-body');
      document.documentElement.classList.add('overflow-body');
    } else {
      document.body.classList.remove('overflow-body');
      document.documentElement.classList.remove('overflow-body');
    }
  }, [open]);

  useEffect(() => {
    const queryDesktopUpChanged = (e: MediaQueryListEvent) => {
      if (e.matches && closeCallback) {
        closeCallback();
      }
    };
    try {
      tabletUpMediaQuery.addEventListener('change', queryDesktopUpChanged);
    } catch (error) {
      tabletUpMediaQuery.addListener(queryDesktopUpChanged);
    }

    return () => {
      try {
        tabletUpMediaQuery.removeEventListener('change', queryDesktopUpChanged);
      } catch (error) {
        tabletUpMediaQuery.removeListener(queryDesktopUpChanged);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
