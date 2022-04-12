import React from 'react';

import Functions from './functions';

import Footer from 'components/templates/Footer';
import Header from 'components/templates/Header';

const Layout: React.FC = ({ children }) => {
  const dataFooter = Functions.getDataFooter();
  const dataHeaderDefault = Functions.getDataHeaderDefault();

  // const dataHeader = useMemo(() => ({
  //   ...dataHeaderDefault,
  // }), [dataHeaderDefault]);

  // const dataFooter = useMemo(() => ({
  //   ...dataFooter,
  // }), [dataFooter]);

  // console.log(dataHeader);

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
