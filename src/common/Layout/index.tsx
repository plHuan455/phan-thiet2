import React, { useCallback, useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import useLayout from './functions';

import FloatingButton from 'common/FloatingButton';
import NotifyWrapper from 'common/NotifyWrapper';
import Footer from 'components/templates/Footer';
import Header from 'components/templates/Header';
import HeaderDivision from 'components/templates/HeaderDivision';
import useGaTracker from 'hooks/useGATracker';
import useGTM from 'hooks/useGTM';

const Layout: React.FC = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleSearch = useCallback((val: string | undefined) => {
    // TODO: get slug from static all later
    navigate(`/tim-kiem?keyword=${val}&sort=newest`);
  }, [navigate]);

  useGaTracker();
  useGTM();

  return (
    <div>
      {pageType === 'subdivisions'
        ? <HeaderDivision handleSearch={handleSearch} {...dataHeaderDefault} />
        : <Header handleSearch={handleSearch} {...dataHeaderDefault} /> }
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
