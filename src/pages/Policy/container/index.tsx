import React, { useRef } from 'react';

import useAnimation from '../animation';

import Banner, { BannerProps } from './banner';
import Ckeditor, { CkeditorProps } from './ckeditor';

import imgBalloon from 'assets/images/pages/policy/balloon.png';
import Image from 'components/atoms/Image';

export type PolicyBlock = BannerProps | CkeditorProps

const Screen: React.FC<BasePageDataTypes<PolicyBlock>> = ({
  blocks,
  banners,
}) => {
  const balloonRef = useRef<HTMLDivElement>(null);
  const { animated, animate } = useAnimation({ ref: balloonRef });
  return (
    <>
      <Banner banners={banners} />
      <section className="s-policy_layer u-pt-md-80 u-pb-md-80 u-pt-48 u-pb-48">
        <animated.div className="s-policy_layer_balloon" ref={balloonRef} style={animate}>
          <Image src={imgBalloon} alt="balloon" />
        </animated.div>
        <Ckeditor blocks={blocks} />
      </section>
    </>
  );
};

export default Screen;
