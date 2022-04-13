import React from 'react';

import ConsultancyTemplate, { ConsultancyProps } from 'components/templates/Consultancy';

const Consultancy: React.FC<ConsultancyProps> = (props) => (
  <div className="s-consultancy">
    <ConsultancyTemplate {...props} />
  </div>
);

export default Consultancy;
