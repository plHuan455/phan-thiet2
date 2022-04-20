import { useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';

type AnimationProps = {
  countNumber: number,
  isActive: boolean,
}
const useAnimation = ({ countNumber, isActive } : AnimationProps) => {
  const [countNumberSpring, setAnimate] = useSpring(() => ({
    reset: true,
    from: { number: 0 },
    delay: 200,
    config: config.molasses,
  }));
  useEffect(() => {
    if (isActive) {
      setAnimate({ number: countNumber });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countNumber, isActive]);
  return {
    animated,
    countNumberAnimate: countNumberSpring,
    setCountNumberAnimate: setAnimate,
  };
};
export default useAnimation;
