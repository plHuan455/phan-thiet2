import {
  useEffect, useMemo, useRef, useState,
} from 'react';

import { getDimensions } from 'utils/functions';

const useMenu = () => {
  const [active, setActive] = useState<string>();

  const refBarWrap = useRef<HTMLDivElement|null>(null);
  const refBar = useRef<HTMLDivElement|null>(null);
  const refNews = useRef<HTMLDivElement|null>(null);
  const refEvent = useRef<HTMLDivElement|null>(null);
  const refImage = useRef<HTMLDivElement|null>(null);
  const refVideo = useRef<HTMLDivElement|null>(null);
  const refDiffer = useRef<HTMLDivElement|null>(null);

  const menuList = useMemo(() => ([
    {
      label: 'Tin tức', // TODO: translation later
      value: 'tin-tuc',
      ref: refNews,
    },
    {
      label: 'Sự kiện',
      value: 'su-kien',
      ref: refEvent,
    },
    {
      label: 'Hình ảnh',
      value: 'hinh-anh',
      ref: refImage,
    },
    {
      label: 'Video',
      value: 'video',
      ref: refVideo,
    },
    {
      label: 'Tài liệu khác',
      value: 'differ',
      ref: refDiffer,
    },
  ]), []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 72;

      const selected = menuList.find(({ ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition + 72 > offsetTop && scrollPosition + 72 < offsetBottom;
        }
        return false;
      });

      if (selected && selected.value !== active) {
        setActive(selected.value);
      } else if (!selected && active) {
        setActive(undefined);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>('#app-header');

    const onScroll = () => {
      if (!refBar.current || !refBarWrap.current) return;
      const windowScrollTop = window.scrollY;
      const offsetTopBarWrap = refBarWrap.current.offsetTop;
      if (windowScrollTop >= offsetTopBarWrap) {
        refBar.current.classList.add('sticky');
        if (header) {
          header.style.visibility = 'hidden';
        }
      } else {
        refBar.current.classList.remove('sticky');
        if (header && windowScrollTop < offsetTopBarWrap + 20) {
          header.style.visibility = 'visible';
        }
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return {
    refBarWrap,
    refBar,
    menuList,
    active,
  };
};

export default useMenu;
