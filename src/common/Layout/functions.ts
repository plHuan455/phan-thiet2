import { useMemo } from 'react';

import dummyFooter from 'assets/dataDummy/footer';
import dummyHeader from 'assets/dataDummy/header';
import { useAppSelector } from 'store/hooks';

const useLayout = () => {
  const {
    mainHeader: menuHeaderDefault,
    mainFooter,
    footer2: menuTermFooter,
  } = useAppSelector((state) => state.menus);

  const data = useMemo(
    () => ({
      dataHeaderDefault: {
        ...dummyHeader,
        menu: menuHeaderDefault,
      },
      dataFooter: {
        ...dummyFooter,
        menuList: {
          title: mainFooter[0],
          list: mainFooter[0]?.subMenu || [],
        },
        divisionList: {
          title: mainFooter[1],
          list: mainFooter[1]?.subMenu || [],
        },
        serviceList: {
          title: mainFooter[2],
          list: mainFooter[2]?.subMenu || [],
        },
        subMenu: menuTermFooter,
      },
    }),
    [menuHeaderDefault, menuTermFooter, mainFooter],
  );

  return data;
};

export default useLayout;
