import React, { useEffect } from 'react';
import { easings, useSpring, animated } from 'react-spring';

import useScrollAnimate from 'hooks/useScrollAnimation';

type AnimationParams = {
  ballonRef: React.RefObject<HTMLDivElement>;
  leafRef: React.RefObject<HTMLDivElement>;
}

const useAnimation = ({ ballonRef, leafRef }: AnimationParams) => {
  const isScrollToBallon = useScrollAnimate(ballonRef);
  const isScrollToLeaf = useScrollAnimate(leafRef);

  const flyAnimation = useSpring({
    rotateZ: 0,
    y: -300,
  });
  const buzzAnimation = useSpring({
    rotateZ: 0,
    x: 40,
  });

  useEffect(() => {
    let res: NodeJS.Timeout;
    if (isScrollToBallon) {
      const { rotateZ, y } = flyAnimation;
      rotateZ.start({
        from: 0,
        to: -15,
        loop: { reverse: true },
        config: { duration: 2000, easing: easings.easeInOutSine },
      });
      y.start({ from: -300, to: 0, config: { duration: 10000 } });
      res = setTimeout(() => {
        rotateZ.start({ cancel: true });
      }, 10000);
    }
    return () => {
      clearTimeout(res);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScrollToBallon]);

  useEffect(() => {
    if (isScrollToLeaf) {
      const { rotateZ, x } = buzzAnimation;
      rotateZ.start({
        from: 0,
        to: -20,
        loop: { reverse: true },
        config: { duration: 400, easing: easings.easeInOutSine },
      });
      x.start({
        from: 40,
        to: 20,
        loop: { reverse: true },
        config: { duration: 2000, easing: easings.easeInOutSine },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScrollToLeaf]);

  return {
    animated,
    ballonAnimate: flyAnimation,
    leafAnimate: buzzAnimation,
  };
};

export default useAnimation;
