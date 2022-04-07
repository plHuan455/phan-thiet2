import React, { useEffect } from 'react';
import { easings, useSpring } from 'react-spring';

import useScrollAnimate from 'hooks/useScrollAnimation';

type AnimationParams = {
  ref: React.RefObject<HTMLDivElement>;
}

const useAnimation = ({ ref }: AnimationParams) => {
  const isScrollTo = useScrollAnimate(ref);

  const slideXAnimation = useSpring({
    x: 0,
  });
  const slideYAnimation = useSpring({
    y: -180,
  });
  const slideYReversAnimation = useSpring({
    y: 340,
  });

  useEffect(() => {
    let res: NodeJS.Timeout;
    if (isScrollTo) {
      const { x } = slideXAnimation;
      const { y: slideY } = slideYAnimation;
      const { y: slideYReverse } = slideYReversAnimation;
      x.start({
        from: 0,
        to: 50,
        loop: { reverse: true },
        config: { duration: 2000, easing: easings.easeInOutSine },
      });
      slideY.start({ from: -180, to: 0, config: { duration: 5500 } });
      slideYReverse.start({ from: 340, to: 0, config: { duration: 5300 } });

      res = setTimeout(() => {
        x.start({ cancel: true });
      }, 5800);
    }
    return () => {
      clearTimeout(res);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScrollTo]);

  return {
    animate: { ...slideXAnimation, ...slideYAnimation },
    animateReverse: { ...slideXAnimation, ...slideYReversAnimation },
  };
};

export default useAnimation;
