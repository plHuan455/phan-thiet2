/* eslint-disable no-console */
import React, { useContext } from 'react';

import Screen from './container';

import { LanguageContext } from 'common/Language';

const Home: React.FC = () => {
  const languageContext = useContext(LanguageContext);

  console.log(languageContext);
  return (
    <div className="p-home">
      <Screen />
    </div>
  );
};

export default Home;
