import React from 'react';

import useLayout from './functions';

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
    </>
  );
};

export default Layout;
