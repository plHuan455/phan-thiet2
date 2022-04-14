import React from 'react';

import Screen, { ContactBlocks } from './container';

const Contact: React.FC<BasePageDataTypes<ContactBlocks>> = (props) => (
  <div className="p-contact">
    <Screen {...props} />
  </div>
);

export default Contact;
