import {
  useEffect, useMemo, useRef,
} from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { setActiveHashDivision } from 'store/menus';
import { getDimensions, scrollDownNextSection } from 'utils/functions';

const useMenu = () => {
  const { hash, state } = useLocation();
  const scrollFirst = useRef<boolean>(false);
  const refActive = useRef<string>();

  const dispatch = useDispatch();
  const ref1 = useRef<HTMLDivElement|null>(null);
  const ref2 = useRef<HTMLDivElement|null>(null);
  const ref3 = useRef<HTMLDivElement|null>(null);

  const menuList = useMemo(() => ([
    {
      hash: '#1',
      ref: ref1,
    },
    {
      hash: '#2',
      ref: ref2,
    },
    {
      hash: '#3',
      ref: ref3,
    },
  ]), []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      const selected = menuList.find(({ ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
        return false;
      });

      if (selected?.hash && selected.hash !== refActive.current) {
        dispatch(setActiveHashDivision(selected.hash));
        refActive.current = selected.hash;
      } else if (!selected && refActive.current) {
        dispatch(setActiveHashDivision('notHash'));
        refActive.current = undefined;
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
    const find = menuList.find((x) => x.hash === hash);
    if (!find || scrollFirst.current) return;

    const timeout = setTimeout(() => {
      scrollDownNextSection(find.ref);
      scrollFirst.current = true;
    }, 500);

    // eslint-disable-next-line consistent-return
    return () => timeout && clearTimeout(timeout);
  }, [hash, menuList]);

  useEffect(() => {
    const find = menuList.find((x) => x.hash === hash);
    if (find && scrollFirst.current) {
      scrollDownNextSection(find.ref);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [(state as any)?.division]);

  return {
    menuList,
  };
};

export default useMenu;
