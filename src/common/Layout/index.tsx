import React from 'react';

import dataFooter from 'assets/dataDummy/footer';
import dataHeader from 'assets/dataDummy/header';
import Footer from 'components/templates/Footer';
import Header from 'components/templates/Header';

const Layout: React.FC = ({ children }) => (
  <>
    <Header {...dataHeader} />
    <main>
      {children}
    </main>
    <Footer {...dataFooter} />
  </>
);

export default Layout;
