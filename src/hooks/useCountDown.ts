import { useEffect, useState } from 'react';

interface CountDownHookProps {
  endTime: string
}

const useCountDown = ({ endTime }: CountDownHookProps) => {
  const [timer, setTimer] = useState({
    days: '00',
    hours: '00',
    mins: '00',
    secs: '00',
  });

  const format = (value: number): string => {
    if (value < 0) {
      return '00';
    }
    if (value < 10) {
      return `0${value}`;
    }
    return value.toString();
  };

  useEffect(() => {
    const dateTime = new Date(endTime).getTime();

    const countdown = setInterval(() => {
      const now = new Date().getTime();

      const distance = dateTime - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((distance % (1000 * 60)) / 1000);

      setTimer({
        days: format(days),
        hours: format(hours),
        mins: format(mins),
        secs: format(secs),
      });

      if (distance < 0) {
        clearInterval(countdown);
      }
      return () => clearInterval(countdown);
    }, 1000);
  }, [endTime]);

  return timer;
};

export default useCountDown;
