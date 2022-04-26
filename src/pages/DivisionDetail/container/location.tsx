import React from 'react';

import DivisionLocation, { TypeDivision } from 'components/templates/DivisionLocation';
import { SubdivisionLocationTypes } from 'services/subdivision/types';

interface LocationProps {
  data?: SubdivisionLocationTypes;
  type?: string;
}

const Location: React.FC<LocationProps> = ({
  data,
  type,
}) => {
  if (!data?.active) return null;

  return (
    <section className="u-pt-md-80 u-pt-48 position-relative" style={{ color: 'var(--theme)' }}>
      <DivisionLocation
        title={data?.titleSection}
        titleBox={data?.title}
        contentBox={data?.description}
        type={type as TypeDivision}
      />
    </section>
  );
};

Location.defaultProps = {
  data: undefined,
  type: undefined,
};

export default Location;
