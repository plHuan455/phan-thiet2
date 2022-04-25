import React from 'react';

import Animate from 'components/organisms/Animate';
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
    <Animate type="fadeInUp">
      <section className="u-pt-md-80 u-pt-48" style={{ color: 'var(--theme)' }}>
        <DivisionLocation
          title={data?.titleSection}
          titleBox={data?.title}
          contentBox={data?.description}
          type={type as TypeDivision}
        />
      </section>
    </Animate>
  );
};

Location.defaultProps = {
  data: undefined,
  type: undefined,
};

export default Location;
