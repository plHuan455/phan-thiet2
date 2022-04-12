/* eslint-disable no-console */
import React, { useContext } from 'react';

import Screen, { HomeBlocks } from './container';

import { LanguageContext } from 'common/Language';

const Home: React.FC<BasePageDataTypes<HomeBlocks>> = (props) => {
  const languageContext = useContext(LanguageContext);

  console.log(languageContext);
  return (
    <div className="p-home">
      <Screen {...props} />
    </div>
  );
};

export default Home;
