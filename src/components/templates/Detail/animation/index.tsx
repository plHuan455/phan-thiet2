import { useEffect } from 'react';
import {
  easings, useSpring, animated,
} from 'react-spring';

const useAnimation = () => {
  const flyAnimation = useSpring({
    rotateZ: 0,
    x: 0,
    y: -200,
    opacity: 0,
  });

  useEffect(() => {
    let res: NodeJS.Timeout;
    if (flyAnimation) {
      const {
        rotateZ, y, x, opacity,
      } = flyAnimation;
      rotateZ.start({
        from: 0,
        to: -15,
        loop: { reverse: true },
        config: { duration: 1800, easing: easings.easeInOutSine },
      });
      y.start({ from: -200, to: 0, config: { duration: 5000 } });
      x.start({
        from: 0, to: 30, loop: { reverse: true }, config: { duration: 2000 },
      });
      opacity.start({ from: 0, to: 1 });
      res = setTimeout(() => {
        rotateZ.start({ cancel: true });
        x.start({ cancel: true });
      }, 5000);
    }

    return () => {
      clearTimeout(res);
    };
  }, [flyAnimation]);

  return {
    animated,
    ballonAnimate: flyAnimation,
  };
};

export default useAnimation;
