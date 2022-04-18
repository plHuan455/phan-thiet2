import React from 'react';

import imgMap from 'assets/images/divisionUtilities/bg.png';
import DivisionUtilities from 'components/templates/DivisionUtilities';
import { SubDivisionDetailTypes } from 'services/subdivision/types';

interface UtilitiesProps {
  data?: SubDivisionDetailTypes;
}

const Utilities: React.FC<UtilitiesProps> = ({ data }) => (
  <section className="u-pt-md-80 u-pt-48 u-pb-md-80 u-pb-48" style={{ color: 'var(--theme)' }}>
    <DivisionUtilities
      background={imgMap}
      title={data?.content.utility.title}
      listLocations={[]}
    />
  </section>
);

Utilities.defaultProps = {
  data: undefined,
};

export default Utilities;
