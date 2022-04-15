/* eslint-disable no-console */
import React, { useContext } from 'react';

import Screen from './container';

import { LanguageContext } from 'common/Language';

const Home: React.FC<BasePageDataTypes<any>> = (props) => {
  const languageContext = useContext(LanguageContext);

  console.log(languageContext);
  return (
    <div className="p-home">
      <Screen {...props} />
    </div>
  );
};

export default Home;
