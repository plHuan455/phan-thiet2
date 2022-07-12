import {
  useEffect, useMemo, useRef, useState,
} from 'react';

import { OverviewType } from 'services/overviews/types';
import {
  baseString, getBlockActive, getBlockData, getDimensions,
} from 'utils/functions';

export type BlockItemTypes = {
  title?: string;
  button?: string;
}

interface MenuNewsProps extends SectionBlocks {
  data?: OverviewType,
}

const useTab = ({ data, blocks } : MenuNewsProps) => {
  const [active, setActive] = useState<string>();

  const refBarWrap = useRef<HTMLDivElement|null>(null);
  const refBar = useRef<HTMLDivElement|null>(null);
  const refNews = useRef<HTMLDivElement|null>(null);
  const refEvent = useRef<HTMLDivElement|null>(null);
  const refImage = useRef<HTMLDivElement|null>(null);
  const refVideo = useRef<HTMLDivElement|null>(null);
  const refDiffer = useRef<HTMLDivElement|null>(null);

  const newsBlocks = getBlockData<BlockItemTypes>('news', blocks);
  const eventsBlock = getBlockData<BlockItemTypes>('event', blocks);
  const imageBlocks = getBlockData<BlockItemTypes>('image', blocks);
  const videoBlock = getBlockData<BlockItemTypes>('video', blocks);
  const documentBlock = getBlockData<BlockItemTypes>('document', blocks);

  const menuList = useMemo(() => ([
    {
      label: baseString(newsBlocks?.title),
      value: 'tin-tuc',
      ref: refNews,
      active: !!data?.news?.total && getBlockActive('news', blocks),
    },
    {
      label: baseString(eventsBlock?.title),
      value: 'su-kien',
      ref: refEvent,
      active: !!data?.events?.total && getBlockActive('event', blocks),
    },
    {
      label: baseString(imageBlocks?.title),
      value: 'hinh-anh',
      ref: refImage,
      active: !!data?.images?.total && getBlockActive('image', blocks),
    },
    {
      label: baseString(videoBlock?.title),
      value: 'video',
      ref: refVideo,
      active: !!data?.videos?.total && getBlockActive('video', blocks),
    },
    {
      label: baseString(documentBlock?.title),
      value: 'differ',
      ref: refDiffer,
      active: !!data?.documents?.total && getBlockActive('document', blocks),
    },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ]), [data, blocks]);

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

export default useTab;
