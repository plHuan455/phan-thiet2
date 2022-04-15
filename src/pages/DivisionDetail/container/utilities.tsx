import React from 'react';

import dataDummy from 'assets/dataDummy/divisionUtilities';
import imgMap from 'assets/images/divisionUtilities/bg.png';
import DivisionUtilities from 'components/templates/DivisionUtilities';

const Utilities: React.FC = () => (
  <section className="u-pt-md-80 u-pt-48 u-pb-md-80 u-pb-48" style={{ color: 'var(--theme)' }}>
    <DivisionUtilities
      title="TỔNG MẶT BẰNG TIỆN ÍCH PHÂN KHU"
      listLocations={dataDummy}
      background={imgMap}
    />
  </section>
);

export default Utilities;
