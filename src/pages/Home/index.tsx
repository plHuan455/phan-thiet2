import React from 'react';

import Screen from './container';

const Home: React.FC<BasePageDataTypes<any>> = (props) => (
  <div className="p-home">
    <Screen {...props} />
  </div>
);

export default Home;
