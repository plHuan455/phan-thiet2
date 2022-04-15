import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

import useLayout from './functions';

import NotifyWrapper from 'common/NotifyWrapper';
import Footer from 'components/templates/Footer';
import Header from 'components/templates/Header';

const Layout: React.FC = ({ children }) => {
  const location = useLocation();
  const {
    dataHeaderDefault,
    dataFooter,
  } = useLayout();

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location]);

  return (
    <>
      <Header {...dataHeaderDefault} />
      <main>
        {children}
      </main>
      <Footer {...dataFooter} />
      <NotifyWrapper />
    </>
  );
};

export default Layout;
