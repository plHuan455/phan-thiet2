import React, { useEffect } from 'react';
import { easings, useSpring } from 'react-spring';

import useDeviceQueries from 'hooks/useDeviceQueries';
import useScrollAnimate from 'hooks/useScrollAnimation';

type AnimationParams = {
  ref: React.RefObject<HTMLDivElement>;
}

const useAnimation = ({ ref }: AnimationParams) => {
  const isScrollTo = useScrollAnimate(ref);
  const { isTablet, isMobile } = useDeviceQueries();

  const slideXAnimation = useSpring({
    x: 0,
  });
  const slideYAnimation = useSpring({
    x: isTablet || isMobile ? 50 : 1,
    y: isTablet || isMobile ? 1 : -80,
  });
  const slideYReversAnimation = useSpring({
    y: 340,
  });
  const sectionAnimation = useSpring({
    y: 0,
    opacity: 1,
  });

  useEffect(() => {
    let res: NodeJS.Timeout;
    if (isScrollTo) {
      const { x } = slideXAnimation;
      const { y: slideYReverse } = slideYReversAnimation;
      x.start({
        from: 100,
        to: 50,
        loop: { reverse: true },
        config: { duration: 1000, easing: easings.easeInOutSine },
      });
      slideYAnimation.y.start({ from: -180, to: 0, config: { duration: 2500 } });
      slideYAnimation.x.start({ from: -100, to: 0, config: { duration: 2500 } });
      slideYReverse.start({ from: 540, to: 0, config: { duration: 1300 } });
      sectionAnimation.y.start({ from: 500, to: 0, config: { duration: 1000 } });
      sectionAnimation.opacity.start({ from: 0, to: 1, config: { duration: 1000 } });

      res = setTimeout(() => {
        x.start({ cancel: true });
      }, 1800);
    }
    return () => {
      clearTimeout(res);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScrollTo]);

  return {
    animate: { ...slideYAnimation },
    animateReverse: { ...slideXAnimation, ...slideYReversAnimation },
    animationSection: sectionAnimation,
  };
};

export default useAnimation;
