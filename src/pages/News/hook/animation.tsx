import { useEffect } from 'react';
import { easings, useSpring, animated } from 'react-spring';

const useAnimation = () => {
  const flyAnimation = useSpring({
    opacity: 0,
    x: 0,
    y: -200,
    rotateZ: 0,
  });

  const slideAnimation = useSpring({
    x: 0,
    opacity: 0,
  });

  const slideReverseAnimation = useSpring({
    x: 0,
    opacity: 0,
  });

  useEffect(() => {
    let res: NodeJS.Timeout;
    {
      const {
        opacity, x: xLeftFly, y: yLeftFly, rotateZ,
      } = flyAnimation;
      const { x: xSlide, opacity: opacitySlide } = slideAnimation;
      const {
        x: xReverseSlide,
        opacity: opacityReverseSlide,
      } = slideReverseAnimation;

      // -------------------- ballons ------------------
      opacity.start({
        from: 0,
        to: 1,
      });
      xLeftFly.start({
        from: 0,
        to: -25,
        loop: { reverse: true },
        config: { duration: 2000, easing: easings.easeInOutSine },
        delay: 500,
      });
      yLeftFly.start({ from: -200, to: 0, config: { duration: 6000 } });

      rotateZ.start({
        from: 0,
        to: -15,
        loop: { reverse: true },
        config: { duration: 1000, easing: easings.easeInOutSine },
      });

      // ----------------- slide ---------------- //
      xSlide.start({ from: 500, to: 0, config: { duration: 500 } });
      opacitySlide.start({ from: 0, to: 1 });

      // ----------------- slide reverse ---------------- //
      xReverseSlide.start({ from: -300, to: 0, config: { duration: 500 } });
      opacityReverseSlide.start({ from: 0, to: 1 });

      res = setTimeout(() => {
        rotateZ.start({ cancel: true });
        xLeftFly.start({ cancel: true });
      }, 6500);
    }

    return () => clearTimeout(res);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  return {
    animated,
    ballonAnimate: flyAnimation,
    slideAnimate: slideAnimation,
    slideReverseAnimate: slideReverseAnimation,
  };
};

export default useAnimation;
