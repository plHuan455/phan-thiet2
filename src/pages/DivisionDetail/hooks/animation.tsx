import React, { useEffect } from 'react';
import { easings, useSpring, animated } from 'react-spring';

import useScrollAnimate from 'hooks/useScrollAnimation';

type AnimationParams = {
  ballonRef: React.RefObject<HTMLDivElement>;
};

const useAnimation = ({ ballonRef }: AnimationParams) => {
  const isScrollToBallon = useScrollAnimate(ballonRef);

  const flyAnimation = useSpring({
    rotateZ: 0,
    x: 40,
    y: -300,
    opacity: 0,
  });

  useEffect(() => {
    let res: NodeJS.Timeout;

    if (isScrollToBallon) {
      const {
        rotateZ, y, x, opacity,
      } = flyAnimation;
      opacity.start({ from: 0, to: 1 });
      rotateZ.start({
        from: 0,
        to: -15,
        loop: { reverse: true },
        config: { duration: 2000, easing: easings.easeInOutSine },
      });
      y.start({ from: -300, to: 0, config: { duration: 10000 } });
      x.start({
        from: 40,
        to: 0,
        loop: { reverse: true },
        config: { duration: 2000, easing: easings.easeInOutSine },
      });
      res = setTimeout(() => {
        rotateZ.start({ cancel: true });
        x.start({ cancel: true });
      }, 10000);
    }
    return () => clearTimeout(res);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScrollToBallon]);

  return {
    animated,
    ballonAnimate: flyAnimation,
  };
};

export default useAnimation;
