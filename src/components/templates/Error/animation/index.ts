import { useEffect } from 'react';
import { easings, useSpring, animated } from 'react-spring';

const useAnimation = () => {
  const flyAnimation = useSpring({
    x: 0,
    y: 0,
    rotateZ: 0,
  });

  const slideToToAnimation = useSpring({
    y: 0,
  });

  useEffect(() => {
    const { x: xFly, y: yFly, rotateZ } = flyAnimation;
    const { y: ySlide } = slideToToAnimation;
    // error
    ySlide.start({
      from: 600,
      to: 0,
      config: { duration: 700, easing: easings.easeInOutSine },
    });

    // ballons
    xFly.start({
      from: 0,
      to: -15,
      loop: { reverse: true },
      config: { duration: 2000, easing: easings.easeInOutSine },
    });

    rotateZ.start({
      from: 0,
      to: -45,
      loop: { reverse: true },
      config: { duration: 1000, easing: easings.easeInOutSine },
    });

    yFly.start({ from: -300, to: 0, config: { duration: 6000 } });
    setTimeout(() => {
      xFly.start({ cancel: true });
    }, 10000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    animated,
    ballonAnimate: flyAnimation,
    errorAnimate: slideToToAnimation,
  };
};

export default useAnimation;
