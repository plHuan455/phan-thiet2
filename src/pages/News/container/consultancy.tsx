import React, { useRef } from 'react';

import useAnimation from '../hook/animation';

import layer1 from 'assets/images/pages/news/layer_1.png';
import ConsultancyCommon from 'common/Consultancy';
import Image from 'components/atoms/Image';
import useScrollAnimate from 'hooks/useScrollAnimation';

const Consultancy: React.FC = () => {
  const layerRef = useRef<HTMLDivElement>(null);
  const isScrollLayer = useScrollAnimate(layerRef);
  const { animated, slideToTopAnimate } = useAnimation();

  return (
    <div className="s-consultancy">
      <ConsultancyCommon
        layer={(
          <animated.div style={isScrollLayer ? slideToTopAnimate : {}} className="s-consultancy_layer" ref={layerRef}>
            <Image src={layer1} alt="ballon" ratio="326x221" />
          </animated.div>
        )}
        title={{
          text: 'ĐĂNG KÝ NHẬN <br /> THÔNG TIN DỰ ÁN',
          modifiers: ['700', 'gradientGreen', 's015'],
        }}
      />
    </div>
  );
};

export default Consultancy;
