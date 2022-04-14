import React from 'react';

import Screen from './container';

const Policy: React.FC<BasePageDataTypes<any>> = (props) => (
  <div className="p-policy">
    <Screen {...props} />
  </div>
);

export default Policy;
