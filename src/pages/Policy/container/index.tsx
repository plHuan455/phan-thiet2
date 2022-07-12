import React, { useRef } from 'react';

import useAnimation from '../animation';

import Banner from './banner';
import Ckeditor from './ckeditor';

import imgBalloon from 'assets/images/pages/policy/balloon.png';
import ConditionSection from 'common/ConditionSection';
import HelmetContainer from 'common/Helmet';
import Image from 'components/atoms/Image';
import { getOgDataPage } from 'utils/functions';

const Screen: React.FC<BasePageDataTypes<any>> = ({
  blocks,
  banners,
  seoData,
  pageData,
}) => {
  const balloonRef = useRef<HTMLDivElement>(null);
  const { animated, animate } = useAnimation({ ref: balloonRef });
  return (
    <>
      <HelmetContainer seoData={seoData} ogData={getOgDataPage(pageData)} />
      <Banner banners={banners} />
      <section className="s-policy_layer u-pt-md-80 u-pb-md-80 u-pt-48 u-pb-48">
        <animated.div className="s-policy_layer_balloon" ref={balloonRef} style={animate}>
          <Image src={imgBalloon} alt="balloon" />
        </animated.div>
        <ConditionSection blocks={blocks} code="introduction">
          <Ckeditor blocks={blocks} />
        </ConditionSection>
      </section>
    </>
  );
};

export default Screen;
