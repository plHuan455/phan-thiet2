import { useEffect } from 'react';
import {
  easings, useSpring, animated,
} from 'react-spring';

const useAnimation = () => {
  const flyAnimation = useSpring({
    rotateZ: 0,
    y: -100,
    opacity: 0,
  });

  const slideToLeftAnimate = useSpring({
    x: 200,
    opacity: 0,

  });

  useEffect(() => {
    let res: NodeJS.Timeout;
    if (flyAnimation && slideToLeftAnimate) {
      const { rotateZ, y, opacity: oFly } = flyAnimation;
      rotateZ.start({
        from: 0,
        to: -15,
        loop: { reverse: true },
        config: { duration: 2000, easing: easings.easeInOutSine },
      });
      y.start({ from: -100, to: 0, config: { duration: 4000 } });
      oFly.start({ from: 0, to: 1 });

      // ----------- slide--------------------
      const { x: xSlide, opacity: oSlide } = slideToLeftAnimate;
      xSlide.start({
        from: 200,
        to: 10,
        config: { duration: 500 },
      });
      oSlide.start({ from: 0, to: 1 });
      res = setTimeout(() => {
        rotateZ.start({ cancel: true });
      }, 4000);
    }
    return () => {
      clearTimeout(res);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flyAnimation, slideToLeftAnimate]);

  return {
    animated,
    ballonAnimate: flyAnimation,
    leafAnimate: slideToLeftAnimate,
  };
};

export default useAnimation;
