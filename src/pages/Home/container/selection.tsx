import React from 'react';

import selectionImage from 'assets/images/selection/image.png';
import SelectionTemplate from 'components/templates/Selection';

const Selection: React.FC = () => (
  <section className="u-mt-xl-206 u-mt-lg-160 u-mt-0">
    <SelectionTemplate
      title="LỰA CHỌN HOÀN HẢO <br />CHO ĐẦU TƯ, DU LỊCH <br />VÀ NGHỈ DƯỠNG"
      image={selectionImage}
    />
  </section>
);

export default Selection;
