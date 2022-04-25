import React, { useContext, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { LayoutContext } from './context';

import FloatingButton from 'common/FloatingButton';
import NotifyWrapper from 'common/NotifyWrapper';
import Footer from 'components/templates/Footer';
import Header from 'components/templates/Header';
import HeaderDivision from 'components/templates/HeaderDivision';
import useGaTracker from 'hooks/useGATracker';
import useGTM from 'hooks/useGTM';

const Layout: React.FC = ({ children }) => {
  const location = useLocation();

  const {
    header, pageType, footer, headerSubdivisions, onSearch,
  } = useContext(LayoutContext);

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

  useGaTracker();
  useGTM();

  return (
    <div>
      {pageType === 'subdivisions'
        ? <HeaderDivision handleSearch={onSearch} {...headerSubdivisions} />
        : <Header handleSearch={onSearch} {...header} /> }
      <main>
        {children}
      </main>
      <Footer {...footer} />
      <NotifyWrapper />
      <FloatingButton />
    </div>
  );
};

export default Layout;
