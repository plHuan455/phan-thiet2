import React from 'react';

import useLayout from './functions';

import NotifyWrapper from 'common/NotifyWrapper';
import Footer from 'components/templates/Footer';
import Header from 'components/templates/Header';

const Layout: React.FC = ({ children }) => {
  const {
    dataHeaderDefault,
    dataFooter,
  } = useLayout();

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
