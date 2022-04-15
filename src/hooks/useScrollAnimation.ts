import React, { useLayoutEffect, useState } from 'react';

const useScrollAnimate = <T extends HTMLElement>(ref: React.RefObject<T>, number = 2): boolean => {
  const [isShow, setIsShow] = useState(false);

  useLayoutEffect(() => {
    const onScroll = () => {
      const topPos = (element: T | null) => (element ? element.getBoundingClientRect().top : 0);
      const ele = topPos(ref.current);
      if (ele < (window.innerHeight / number)) {
        setIsShow(true);
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [number, ref]);
  return isShow;
};

export default useScrollAnimate;
