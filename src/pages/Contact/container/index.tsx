import React, { useRef } from 'react';

import useAnimation from '../animation';

import Banner from './banner';
import Form from './form';
import Map from './map';

import imgBalloon from 'assets/images/pages/contact/balloon.png';
import imgLeaf from 'assets/images/pages/contact/leaf.png';
import Image from 'components/atoms/Image';

const Screen: React.FC<BasePageDataTypes<any>> = ({
  banners,
  blocks,
}) => {
  const ballonRef = useRef<HTMLDivElement>(null);
  const leafRef = useRef<HTMLDivElement>(null);

  const { animated, ballonAnimate, leafAnimate } = useAnimation({ ballonRef, leafRef });

  return (
    <>
      <Banner banners={banners} />
      <Map blocks={blocks} />
      <section className="s-contact_layer">
        <animated.div className="s-contact_layer_balloon" ref={ballonRef} style={ballonAnimate}>
          <Image src={imgBalloon} alt="balloon" />
        </animated.div>
        <animated.div className="s-contact_layer_leaf" ref={leafRef} style={leafAnimate}>
          <Image src={imgLeaf} alt="leaf" />
        </animated.div>
        <Form blocks={blocks} />
      </section>
    </>
  );
};
export default Screen;
