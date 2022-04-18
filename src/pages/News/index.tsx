import React from 'react';

import Screen from './container';

const News: React.FC<BasePageDataTypes<any>> = (props) => (
  <div className="p-news">
    <Screen {...props} />
  </div>
);

export default News;
