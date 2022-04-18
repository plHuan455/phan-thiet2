import React from 'react';

import layer1 from 'assets/images/pages/news/layer_1.png';
import ConsultancyCommon from 'common/Consultancy';
import Image from 'components/atoms/Image';

const Consultancy: React.FC = () => (
  <div className="s-consultancy">
    <ConsultancyCommon
      layer={(
        <div className="s-consultancy_layer">
          <Image src={layer1} alt="ballon" ratio="326x221" />
        </div>
        )}
      title={{
        text: 'ĐĂNG KÝ NHẬN <br /> THÔNG TIN DỰ ÁN',
        modifiers: ['700', 'gradientGreen', 's015'],
      }}
    />
  </div>
);

export default Consultancy;
