import React from 'react';

import dataDummy from 'assets/dataDummy/divisionUtilities';
import DivisionUtilities from 'components/templates/DivisionUtilities';

const Utilities: React.FC = () => (
  <section className="u-mt-md-80 u-mt-48 u-mb-md-80 u-mb-48" style={{ color: 'var(--theme)' }}>
    <DivisionUtilities
      title="TỔNG MẶT BẰNG TIỆN ÍCH PHÂN KHU"
      listLocations={dataDummy}
    />
  </section>
);

export default Utilities;
