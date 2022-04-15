import React from 'react';

import Screen from './container';

const DivisionList: React.FC<BasePageDataTypes<any>> = (props) => (
  <div className="p-divisionList">
    <Screen {...props} />
  </div>
);

export default DivisionList;
