export const handleScrollYCenter = (
  ref: React.RefObject<HTMLDivElement | null>,
  classNameChild: string,
  index: number,
) => {
  const eleScroll = ref.current;
  if (!eleScroll) return;
  const eleActive = ref?.current?.querySelectorAll(classNameChild)[index];
  if (!eleActive) return;
  // get width element scroll
  const widthEleScroll = eleScroll.getBoundingClientRect().height;
  // get distance element scroll compared to y window
  const xEleScroll = eleScroll.getBoundingClientRect().y;
  // get width element active
  const widthEleActive = eleActive.getBoundingClientRect().height;
  // get distance element active compared to y window
  const xEleActive = eleActive.getBoundingClientRect().y;
  // get position sroll bar
  const positionScroll = eleScroll.scrollTop;
  const scrollX = xEleActive
    - xEleScroll
    + widthEleActive / 2
    - widthEleScroll / 2;

  let startTime:number;

  const animateScroll = (timeStamp = 0): void => {
    if (!startTime) {
      startTime = timeStamp;
    }
    const escaped = timeStamp - startTime;

    const scrollPercent = scrollX * Math.min((escaped / 400), 1);
    eleScroll.scrollTop = positionScroll + scrollPercent;
    if (escaped < 400) {
      requestAnimationFrame(animateScroll);
    }
  };

  animateScroll();
};

export const handleScrollXCenter = (
  ref: React.RefObject<HTMLDivElement | null>,
  classNameChild: string,
  index: number,
) => {
  const eleScroll = ref.current;
  if (!eleScroll) return;
  const eleActive = ref?.current?.querySelectorAll(classNameChild)[index];
  if (!eleActive) return;
  // get width element scroll
  const widthEleScroll = eleScroll.getBoundingClientRect().width;
  // get distance element scroll compared to y window
  const xEleScroll = eleScroll.getBoundingClientRect().x;
  // get width element active
  const widthEleActive = eleActive.getBoundingClientRect().width;
  // get distance element active compared to y window
  const xEleActive = eleActive.getBoundingClientRect().x;
  // get position sroll bar
  const positionScroll = eleScroll.scrollLeft;
  const scrollX = xEleActive
    - xEleScroll
    + widthEleActive / 2
    - widthEleScroll / 2;

  let startTime:number;

  const animateScroll = (timeStamp = 0): void => {
    if (!startTime) {
      startTime = timeStamp;
    }
    const escaped = timeStamp - startTime;

    const scrollPercent = scrollX * Math.min((escaped / 400), 1);
    eleScroll.scrollLeft = positionScroll + scrollPercent;
    if (escaped < 400) {
      requestAnimationFrame(animateScroll);
    }
  };

  animateScroll();
};
