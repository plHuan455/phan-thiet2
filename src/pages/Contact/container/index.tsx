import React, { useRef } from 'react';

import useAnimation from '../animation';

import Banner from './banner';
import Form from './form';
import Map from './map';

import imgBalloon from 'assets/images/pages/contact/balloon.png';
import imgLeaf from 'assets/images/pages/contact/leaf.png';
import ConditionSection from 'common/ConditionSection';
import HelmetContainer from 'common/Helmet';
import Image from 'components/atoms/Image';
import useScrollAnimate from 'hooks/useScrollAnimation';
import { getOgDataPage } from 'utils/functions';

const Layer = React.memo(() => {
  const ballonRef = useRef<HTMLDivElement>(null);
  const leafRef = useRef<HTMLDivElement>(null);
  const isScrollToBallon = useScrollAnimate(ballonRef);
  const isScrollToLeaf = useScrollAnimate(leafRef);
  const { animated, ballonAnimate, leafAnimate } = useAnimation();
  return (
    <div className="s-contact_layer">
      <animated.div className="s-contact_layer_balloon" style={isScrollToBallon ? ballonAnimate : {}} ref={ballonRef}>
        <Image src={imgBalloon} alt="balloon" />
      </animated.div>
      <animated.div className="s-contact_layer_leaf" style={isScrollToLeaf ? leafAnimate : {}} ref={leafRef}>
        <Image src={imgLeaf} alt="leaf" />
      </animated.div>
    </div>
  );
});

const Screen: React.FC<BasePageDataTypes<any>> = ({
  banners,
  blocks,
  seoData,
  pageData,
}) => (
  <>
    <HelmetContainer seoData={seoData} ogData={getOgDataPage(pageData)} />
    <Banner banners={banners} />
    <ConditionSection blocks={blocks} code="contact_headquarter">
      <Map blocks={blocks} />
    </ConditionSection>
    <ConditionSection blocks={blocks} code="form_contact">
      <section className="s-contact_form position-relative">
        <Layer />
        <Form blocks={blocks} />
      </section>
    </ConditionSection>
  </>
);
export default Screen;
