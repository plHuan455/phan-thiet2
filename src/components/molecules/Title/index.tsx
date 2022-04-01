import React, { useLayoutEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

import Heading, { HeadingProps } from 'components/atoms/Heading';
import useScrollAnimate from 'hooks/useScrollAnimation';

interface TitleProps extends HeadingProps {
}

const Title: React.FC<TitleProps> = (rest) => {
  const ref = useRef<HTMLDivElement>(null);
  const animate = useScrollAnimate(ref);
  const [props, api] = useSpring(() => ({
    from: {
      opacity: 0,
    },
  }));

  useLayoutEffect(() => {
    if (animate) {
      api.start({
        from: {
          opacity: 0,
        },
        to: {
          opacity: 1,
        },
        config: {
          duration: 1000,
        },
      });
    }
  }, [animate, api]);

  return (
    <div className="m-title">
      <animated.div className="m-title_trail" style={props}>
        <div ref={ref}>
          <Heading {...rest} />
        </div>
      </animated.div>
    </div>
  );
};

Title.defaultProps = {
};

export default React.memo(Title);
