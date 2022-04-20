import React from 'react';

import DivisionLocation, { TypeDivision } from 'components/templates/DivisionLocation';
import { SubDivisionDetailTypes } from 'services/subdivision/types';

interface LocationProps {
  data?: SubDivisionDetailTypes;
}

const Location: React.FC<LocationProps> = ({
  data,
}) => (
  <section className="u-pt-md-80 u-pt-48" style={{ color: 'var(--theme)' }}>
    <DivisionLocation
      title="VỊ TRÍ DỰ ÁN"
      titleBox="THE KINGDOM"
      contentBox="Nơi tinh hoa năm châu hội tự với những tiện ích hàng đầu, nơi các dãy biệt thự ôm trọn cả “thế giới”, The Kingdom là điểm giao huyết mạch, là trái tim của NovaWorld Phan Thiet"
      type={data?.type as TypeDivision}
    />
  </section>
);

Location.defaultProps = {
  data: undefined,
};

export default Location;
