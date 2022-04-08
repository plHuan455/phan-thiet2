import React from 'react';

import Screen, { PolicyBlock } from './container';

const Policy: React.FC<BasePageDataTypes<PolicyBlock>> = (props) => (
  <div className="p-policy">
    <Screen {...props} />
  </div>
);

export default Policy;
