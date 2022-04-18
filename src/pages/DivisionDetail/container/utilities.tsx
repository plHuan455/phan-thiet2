import React from 'react';

import DivisionUtilities, { DivisionUtilitiesProps } from 'components/templates/DivisionUtilities';

interface UtilitiesProps extends DivisionUtilitiesProps {}

const Utilities: React.FC<UtilitiesProps> = (props) => (
  <section className="u-pt-md-80 u-pt-48 u-pb-md-80 u-pb-48" style={{ color: 'var(--theme)' }}>
    <DivisionUtilities
      {...props}
    />
  </section>
);

export default Utilities;
