import React, { useLayoutEffect, useState } from 'react';

const useScrollAnimate = <T extends HTMLElement>(ref: React.RefObject<T>): boolean => {
  const [isShow, setIsShow] = useState(false);

  useLayoutEffect(() => {
    const onScroll = () => {
      const topPos = (element: T | null) => (element ? element.getBoundingClientRect().top : 0);
      const ele = topPos(ref.current);
      if (ele < (window.innerHeight / 1.3)) {
        setIsShow(true);
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [ref]);
  return isShow;
};

export default useScrollAnimate;
