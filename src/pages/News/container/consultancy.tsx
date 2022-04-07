import React from 'react';

import Consultancy, { ConsultancyProps } from 'components/templates/Consultancy';

const ConsultancyContainer: React.FC<ConsultancyProps> = (props) => (
  <div className="s-consultancy">
    <Consultancy {...props} />
  </div>
);

export default ConsultancyContainer;
