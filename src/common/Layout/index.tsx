import React, { useMemo } from 'react';

import dummyFooter from 'assets/dataDummy/footer';
import dummyHeader from 'assets/dataDummy/header';
import Footer from 'components/templates/Footer';
import Header from 'components/templates/Header';
import { useAppSelector } from 'store/hooks';

const Layout: React.FC = ({ children }) => {
  const {
    mainHeader,
    mainFooter,
    footer2,
  } = useAppSelector((state) => state.menus);

  const dataHeader = useMemo(() => ({
    ...dummyHeader,
    menu: mainHeader,
  }), [mainHeader]);

  const dataFooter = useMemo(() => ({
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
    subMenu: footer2,
  }), [footer2, mainFooter]);

  return (
    <>
      <Header {...dataHeader} />
      <main>
        {children}
      </main>
      <Footer {...dataFooter} />
    </>
  );
};

export default Layout;
