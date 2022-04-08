import React, { useEffect } from 'react';
import { easings, useSpring, animated } from 'react-spring';

import useScrollAnimate from 'hooks/useScrollAnimation';

type AnimationParams = {
  ref: React.RefObject<HTMLDivElement>;
}
const useAnimation = ({ ref }: AnimationParams) => {
  const isScrollTo = useScrollAnimate(ref);
  const rotateZAnimation = useSpring({
    rotateZ: 0,
  });
  const slideYAnimation = useSpring({
    y: -500,
  });

  useEffect(() => {
    let res: NodeJS.Timeout;
    if (isScrollTo) {
      const { rotateZ } = rotateZAnimation;
      const { y: slideY } = slideYAnimation;
      rotateZ.start({
        from: 0,
        to: -45,
        loop: { reverse: true },
        config: { duration: 2000, easing: easings.easeInOutSine },
      });
      slideY.start({ from: -500, to: 0, config: { duration: 10000 } });
      res = setTimeout(() => {
        rotateZ.start({ cancel: true });
      }, 10000);
    }
    return () => {
      clearTimeout(res);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScrollTo]);

  return {
    animated,
    animate: { ...rotateZAnimation, ...slideYAnimation },
  };
};

export default useAnimation;
