import { useEffect } from 'react';
import { easings, useSpring, animated } from 'react-spring';

const useAnimation = () => {
  const flyAnimation = useSpring({
    x: 0,
    y: 0,
    rotateZ: 0,
  });

  const flyRightAnimation = useSpring({
    x: 0,
    y: 0,
  });

  // slide
  const slideYImageAnimation = useSpring({
    to: { y: 0 },
    from: { y: 600 },
  });
  const slideYTitleAnimation = useSpring({
    to: { y: 0 },
    from: { y: 600 },
    delay: 1000,
  });
  const slideYActionAnimation = useSpring({
    to: { y: 0 },
    from: { y: 600 },
    delay: 1500,
  });

  useEffect(() => {
    let res: NodeJS.Timeout;
    if (flyAnimation
      && slideYImageAnimation
      && slideYTitleAnimation
      && slideYActionAnimation) {
      const { x: xLeftFly, y: yLeftFly, rotateZ } = flyAnimation;
      const { x: xRightFly, y: yRightFly } = flyRightAnimation;

      // ballons left
      xLeftFly.start({
        from: 0,
        to: -35,
        loop: { reverse: true },
        config: { duration: 2000, easing: easings.easeInOutSine },
      });

      rotateZ.start({
        from: 0,
        to: -45,
        loop: { reverse: true },
        config: { duration: 1000, easing: easings.easeInOutSine },
      });

      yLeftFly.start({ from: -300, to: 0, config: { duration: 6000 } });

      // ballons right
      xRightFly.start({
        from: 0,
        to: 50,
        loop: { reverse: true },
        config: { duration: 2000, easing: easings.easeInOutSine },
      });
      yRightFly.start({ from: -180, to: 0, config: { duration: 8000 } });

      res = setTimeout(() => {
        rotateZ.start({ cancel: true });
        xRightFly.start({ cancel: true });
        xLeftFly.start({ cancel: true });
      }, 6000);
    }

    return () => {
      clearTimeout(res);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flyAnimation,
    slideYImageAnimation,
    slideYTitleAnimation,
    slideYActionAnimation]);

  return {
    animated,
    ballonLeftAnimate: flyAnimation,
    ballonRightAnimate: flyRightAnimation,
    errorImageAnimate: slideYImageAnimation,
    errorTitleAnimate: slideYTitleAnimation,
    errorActionAnimate: slideYActionAnimation,
  };
};

export default useAnimation;
