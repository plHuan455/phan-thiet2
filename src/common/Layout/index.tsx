import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

import useLayout from './functions';

import FloatingButton from 'common/FloatingButton';
import NotifyWrapper from 'common/NotifyWrapper';
import Footer from 'components/templates/Footer';
import Header from 'components/templates/Header';
import HeaderDivision from 'components/templates/HeaderDivision';

const Layout: React.FC = ({ children }) => {
  const location = useLocation();
  const {
    dataHeaderDefault,
    dataFooter,
    pageType,
  } = useLayout();

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

  return (
    <div>
      {pageType === 'subdivisions' ? <HeaderDivision {...dataHeaderDefault} /> : <Header {...dataHeaderDefault} /> }
      <main>
        {children}
      </main>
      <Footer {...dataFooter} />
      <NotifyWrapper />
      <FloatingButton />
    </div>
  );
};

export default Layout;
