import React, { useRef, useState, useEffect } from 'react';

interface UseNewsResponse {
  ref: {
    news: React.RefObject<HTMLDivElement>;
    events: React.RefObject<HTMLDivElement>;
    images: React.RefObject<HTMLDivElement>;
    videos: React.RefObject<HTMLDivElement>;
    documents: React.RefObject<HTMLDivElement>;
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
    },
    refIdx: refIdxActive,
    setRef: (val?: number) => setRefIdxActive(val),
  };
};

export default useNews;
