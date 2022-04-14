import React from 'react';

import Screen from './container';

const Contact: React.FC<BasePageDataTypes<any>> = (props) => (
  <div className="p-contact">
    <Screen {...props} />
  </div>
);

export default Contact;
