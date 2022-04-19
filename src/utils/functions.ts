export const BASE_URL = process.env.REACT_APP_BASE_URL;

function mapModifiers(
  baseClassName: string,
  ...modifiers: (string | string[] | false | undefined)[]
): string {
  return modifiers
    .reduce<string[]>(
      (acc, m) => (!m ? acc : [...acc, ...(typeof m === 'string' ? [m] : m)]),
      [],
    )
    .map((m) => `-${m}`)
    .reduce<string>(
      (classNames, suffix) => `${classNames} ${baseClassName}${suffix}`,
      baseClassName,
    );
}

export default mapModifiers;

/*!
 * Scroll down to next block element
 */
export function scrollDownNextSection(ref: React.RefObject<HTMLDivElement>) {
  if (ref && ref.current) {
    window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop - 68 }); // Minus header height
  }
}

/*!
 * getMousePosition(event) - cross browser normalizing of:
 * clientX, clientY, screenX, screenY, offsetX, offsetY, pageX, pageY
 * HTMLElement
 */
export function getMousePosition(
  evt:
    | React.MouseEvent<SVGPathElement, MouseEvent>
    | React.MouseEvent<SVGRectElement, MouseEvent>,
  item: HTMLDivElement,
) {
  let { pageX } = evt;
  let { pageY } = evt;
  if (pageX === undefined) {
    pageX = evt.clientX
      + document.body.scrollLeft
      + document.documentElement.scrollLeft;
    pageY = evt.clientY
      + document.body.scrollTop
      + document.documentElement.scrollTop;
  }

  const rect = item.getBoundingClientRect();
  const offsetX = evt.clientX - rect.left;
  const offsetY = evt.clientY - rect.top;

  return {
    client: { x: evt.clientX, y: evt.clientY }, // relative to the viewport
    screen: { x: evt.screenX, y: evt.screenY }, // relative to the physical screen
    offset: { x: offsetX, y: offsetY }, // relative to the event target
    page: { x: pageX, y: pageY }, // relative to the html document
  };
}

export function getDimensions(ele: HTMLDivElement) {
  const { height } = ele.getBoundingClientRect();
  const { offsetTop } = ele;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
}

export function scrollStop(callback: (value: any) => void, time = 2000) {
  // Make sure a valid callback was provided
  if (!callback || typeof callback !== 'function') return;

  // Setup scrolling variable
  let isScrolling: any;

  // Listen for scroll events
  window.addEventListener(
    'scroll',
    () => {
      // Clear our timeout throughout the scroll
      window.clearTimeout(isScrolling);

      // Set a timeout to run after scrolling ends
      isScrolling = setTimeout(callback, time);
    },
    false,
  );
}

export const handleScrollCenter = (ref: React.RefObject<HTMLDivElement | null>,
  classNameEleActive: string) => {
  const eleScroll = ref.current;
  const eleActive = document.querySelector(classNameEleActive);
  if (!eleActive || !eleScroll) return;
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
  const scrollX = xEleActive - xEleScroll
    + widthEleActive / 2 + positionScroll - widthEleScroll / 2;
  eleScroll.scroll({
    left: scrollX,
    behavior: 'smooth',
  });
};

export function getBlockData<T>(
  _code: string,
  listBlock?: any[],
): T | undefined {
  if (!listBlock) return undefined;
  return listBlock?.find((item) => item.code === _code)?.blocks;
}

export function getBannerData(
  _code: string,
  listBlock: BannersDataTypes[],
): BannersData | undefined {
  if (!listBlock) return undefined;
  const findIndex = listBlock.findIndex((item) => item.type === _code);
  if (findIndex < 0) {
    return undefined;
  }
  return listBlock[findIndex].data;
}

export const baseURL = (src?: string): string => `${BASE_URL || ''}${src || ''}`;

export const linkURL = (src?: string): string => {
  if (!BASE_URL || !src) return '';

  return BASE_URL + src;
};

export const baseString = (str?: string): string => {
  if (!str) return '';

  return str;
};

export const countDownFn = (day:string, hour:string, min:string, sec: string) => `${day ? `${day}:` : ''}${hour ? `${hour}:` : ''}${min ? `${min}:` : ''}${sec ? `${sec}` : ''}`;

export const youtubeParser = (url: string) => {
  // eslint-disable-next-line no-useless-escape
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  const match = url.match(regExp);
  // eslint-disable-next-line eqeqeq
  return match && match[7].length == 11 ? match[7] : false;
};

export const youtubeControlIframe = (url: string) => `<iframe src="https://www.youtube.com/embed/${youtubeParser(
  url,
)}?autoplay=1&disablekb=1&enable&controls=1&jsapi=1&loop=1&modestbranding=1&playsinline=1&color=white&mute=0" frameborder="0" allowfullscreen allow="autoplay" autoplay></iframe>`;

export const getTimePastToCurrent = (date?: string) => {
  if (!date) return '';
  const dateFormat = new Date(date).getTime();
  const toDay = new Date().getTime();
  const distance = toDay - dateFormat;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  if (days > 0) return `${days} ngày trước`;
  if (hours > 0) return `${hours} giờ trước`;
  return `${mins > 0 ? mins : 1} phút trước`;
};

export const getSearchParams = (path: string) => Object.fromEntries(new URLSearchParams(path));

export const getOgDataPage = (pageData?: PageDataTypes) => ({
  ogDescription: pageData?.ogDescription,
  ogImage: pageData?.ogImage,
  ogTitle: pageData?.ogTitle,
  ogType: pageData?.ogType,
});
