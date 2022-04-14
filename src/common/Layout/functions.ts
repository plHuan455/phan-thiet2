import { useMemo } from 'react';

import dummyFooter from 'assets/dataDummy/footer';
import dummyHeader from 'assets/dataDummy/header';
import { useAppSelector } from 'store/hooks';

const useLayout = () => {
  const {
    mainHeader: menuHeaderDefault,
    header2: menuMainDivision,
    mainFooter,
    footer2: menuTermFooter,
  } = useAppSelector((state) => state.menus);

  const {
    pageType,
  } = useAppSelector((state) => state.system);

  const data = useMemo(
    () => ({
      dataHeaderDefault: {
        ...dummyHeader,
        menuMainDivision,
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
      pageType,
    }),
    [menuMainDivision, menuHeaderDefault, mainFooter, menuTermFooter, pageType],
  );

  return data;
};

export default useLayout;
