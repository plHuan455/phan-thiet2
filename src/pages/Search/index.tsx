import React from 'react';

import Screen from './container';

const Search: React.FC<BasePageDataTypes<any>> = (props) => (
  <div className="p-search">
    <Screen {...props} />
  </div>
);

export default Search;
