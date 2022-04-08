import React, { useMemo, useRef } from 'react';

import useAnimation from '../animation';

import Banner, { BannerBlocks } from './banner';
import Ckeditor, { CkeditorBlocks } from './ckeditor';

import imgBalloon from 'assets/images/pages/policy/balloon.png';
import Image from 'components/atoms/Image';
import { baseString, getBlockData } from 'utils/functions';

export type PolicyBlock = BannerBlocks | CkeditorBlocks

const Screen: React.FC<BasePageDataTypes<PolicyBlock>> = ({
  blocks,
  banners,
}) => {
  const balloonRef = useRef<HTMLDivElement>(null);
  const { animated, animate } = useAnimation({ ref: balloonRef });
  // blocks
  const introduceBlock = useMemo(() => {
    const blockPageContent = getBlockData<CkeditorBlocks>(
      'introduction',
      blocks,
    );
    return {
      content: baseString(blockPageContent?.content),
    };
  }, [blocks]);

  return (
    <>
      <Banner banners={banners} />
      <section className="s-policy_layer u-pt-md-80 u-pb-md-80 u-pt-48 u-pb-48">
        <animated.div className="s-policy_layer_balloon" ref={balloonRef} style={animate}>
          <Image src={imgBalloon} alt="balloon" />
        </animated.div>
        <Ckeditor {...introduceBlock} />
      </section>
    </>
  );
};

export default Screen;
