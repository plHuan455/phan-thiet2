import React from 'react';

import ConsultancyCommon from 'common/Consultancy';

const Consultancy: React.FC = () => (
  <div className="s-consultancy">
    <ConsultancyCommon
      title={{
        text: 'ĐĂNG KÝ NHẬN <br /> THÔNG TIN DỰ ÁN',
        modifiers: ['700', 'gradientGreen', 's015'],
      }}
    />
  </div>
);

export default Consultancy;
