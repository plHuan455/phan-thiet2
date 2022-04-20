/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';

import useWindowScroll from 'hooks/useWindowScroll';

interface UseNewsResponse {
  ref: {
    news: React.RefObject<HTMLDivElement>;
    events: React.RefObject<HTMLDivElement>;
    images: React.RefObject<HTMLDivElement>;
    videos: React.RefObject<HTMLDivElement>;
    documents: React.RefObject<HTMLDivElement>;
    content: React.RefObject<HTMLDivElement>;
    menu: React.RefObject<HTMLDivElement>;
    backdrop: React.RefObject<HTMLDivElement>;
  };
  refIdx?: number;
  setRef: (val?: number) => void;
}

const useNews = (): UseNewsResponse => {
  const [refIdxActive, setRefIdxActive] = useState<number>();
  const newsRef = useRef<HTMLDivElement>(null);
  const eventRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const videosRef = useRef<HTMLDivElement>(null);
  const documentsRef = useRef<HTMLDivElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  const lastScrollTopRef = useRef(0);
  const indexClicked = useRef<number | undefined>();

  // useWindowScroll(() => {
  //   const menuPanel = menuRef.current;
  //   const contentPanel = contentRef.current;
  //   const backdrop = backdropRef.current;
  //   const newsEl = newsRef.current;
  //   const eventsEl = eventRef.current;
  //   const imagesEl = imagesRef.current;
  //   const videosEl = videosRef.current;
  //   const documentEl = documentsRef.current;
  //   const appHeader = document.getElementById('app-header');
  //   if (
  //     menuPanel
  //     && contentPanel
  //     && appHeader
  //     && backdrop
  //     && newsEl
  //     && eventsEl
  //     && imagesEl
  //     && videosEl
  //     && documentEl
  //   ) {
  //     const tabMenuTop = appHeader.offsetHeight;
  //     const st = window.pageYOffset || document.documentElement.scrollTop;
  //     const isOverDownContent: boolean = st > contentPanel.offsetTop;
  //     const isOverUpContent: boolean = st < contentPanel.offsetTop - tabMenuTop;
  //     const isScrollDown: boolean = st > lastScrollTopRef.current;
  //     const documentTop = documentEl.getBoundingClientRect().top;
  //     const sectionEls = [newsEl, eventsEl, imagesEl, videosEl, documentEl];
  //     const windowBoundTop = window.screen.availHeight / 3;
  //     if (menuPanel.style.position === 'fixed') {
  //       menuPanel.style.top = `${tabMenuTop}px`;
  //     }
  //     if (isOverDownContent && isScrollDown) {
  //       menuPanel.style.position = 'fixed';
  //       contentPanel.style.paddingTop = `${menuPanel.offsetHeight}px`;
  //       backdrop.style.top = '0px';
  //     }
  //     if (isOverUpContent && !isScrollDown) {
  //       menuPanel.style.position = '';
  //       contentPanel.style.paddingTop = '';
  //     }
  //     if (documentTop > 0 && !isScrollDown) {
  //       menuPanel.style.opacity = '1';
  //       backdrop.style.top = '0px';
  //       if (st > contentPanel.offsetTop) {
  //         backdrop.style.top = '0px';
  //       }
  //     }
  //     if (documentTop < 0 && isScrollDown) {
  //       menuPanel.style.opacity = '0';
  //       menuPanel.style.top = '-100px';
  //       backdrop.style.top = '-100px';
  //     }
  //     if (st < contentPanel.offsetTop) {
  //       backdrop.style.top = '-100px';
  //     }
  //     let activeIdx = 0;
  //     sectionEls.forEach((el, elIdx) => {
  //       const elTop = el.getBoundingClientRect().top;
  //       if (elTop <= windowBoundTop) {
  //         activeIdx = elIdx;
  //       }
  //     });
  //     if (typeof indexClicked.current !== 'number' || indexClicked.current === activeIdx) {
  //       setRefIdxActive(activeIdx);
  //       indexClicked.current = undefined;
  //     }

  //     lastScrollTopRef.current = st <= 0 ? 0 : st;
  //   }
  // });

  // const handleMenuTabChange = (nextIndex?: number) => {
  //   indexClicked.current = nextIndex;
  //   if (nextIndex === undefined) return;

  //   let currentTop: number | undefined = 0;
  //   switch (nextIndex) {
  //     case 0:
  //       currentTop = newsRef.current?.offsetTop;
  //       break;
  //     case 1:
  //       currentTop = eventRef.current?.offsetTop;
  //       break;
  //     case 2:
  //       currentTop = imagesRef.current?.offsetTop;
  //       break;
  //     case 3:
  //       currentTop = videosRef.current?.offsetTop;
  //       break;
  //     case 4:
  //       currentTop = documentsRef.current?.offsetTop;
  //       break;
  //     default:
  //       currentTop = newsRef.current?.offsetTop;
  //       break;
  //   }

  //   if (currentTop) {
  //     console.log('currentTop 123123: ', currentTop);
  //     window.scrollTo({
  //       top: currentTop + window.screen.availHeight / 3,
  //       behavior: 'smooth',
  //     });
  //   }
  //   setRefIdxActive(nextIndex);
  // };

  // scroll to animte

  useEffect(() => {
    switch (refIdxActive) {
      case 0:
        window.scrollTo({
          top: newsRef?.current?.offsetTop,
          behavior: 'smooth',
        });
        break;

      case 1:
        window.scrollTo({
          top: eventRef?.current?.offsetTop,
          behavior: 'smooth',
        });
        break;

      case 2:
        window.scrollTo({
          top: imagesRef?.current?.offsetTop,
          behavior: 'smooth',
        });
        break;

      case 3:
        window.scrollTo({
          top: videosRef?.current?.offsetTop,
          behavior: 'smooth',
        });
        break;

      case 4:
        window.scrollTo({
          top: documentsRef?.current?.offsetTop,
          behavior: 'smooth',
        });
        break;

      default:
        break;
    }
  }, [refIdxActive]);

  return {
    ref: {
      news: newsRef,
      events: eventRef,
      images: imagesRef,
      videos: videosRef,
      documents: documentsRef,
      content: contentRef,
      menu: menuRef,
      backdrop: backdropRef,
    },
    refIdx: refIdxActive,
    setRef: (idx) => setRefIdxActive(idx),
  };
};

export default useNews;
