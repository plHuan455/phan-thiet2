import React, { useMemo, useRef } from 'react';

import useAnimation from '../animation';

import Banner, { BannerBlocks } from './banner';
import Ckeditor from './ckeditor';

import imgBalloon from 'assets/images/pages/policy/balloon.png';
import Image from 'components/atoms/Image';
import {
  baseString, baseURL, getBannerData, getBlockData,
} from 'utils/functions';

interface PolicyPageBlock {
  content: string
}

export type PolicyBlock = BannerBlocks | PolicyPageBlock

const Screen: React.FC<BasePageDataTypes<PolicyBlock>> = ({
  blocks,
  banners,
}) => {
  const balloonRef = useRef<HTMLDivElement>(null);
  const { animated, animate } = useAnimation({ ref: balloonRef });

  const bannerData = useMemo(() => ({
    image: banners.map((item) => ({
      src: baseURL(item.data.imageDesktop),
      srcTablet: baseURL(item.data.imageTablet),
      srcMobile: baseURL(item.data.imageMobile),
    }))[0],
    title: getBannerData(banners[0].type, banners)?.title,
  }), [banners]);

  const introduceBlock = useMemo(() => {
    const blockPageContent = getBlockData<PolicyPageBlock>(
      'introduction',
      blocks,
    );
    return {
      content: baseString(blockPageContent?.content),
    };
  }, [blocks]);

  return (
    <>
      <Banner {...bannerData} />
      <section className="s-policy_layer u-pt-md-80 u-pb-md-80 u-pt-48 u-pb-48">
        <animated.div className="s-policy_layer_balloon" ref={balloonRef} style={animate}>
          <Image src={imgBalloon} alt="balloon" />
        </animated.div>
        {introduceBlock?.content && <Ckeditor content={introduceBlock?.content} />}
      </section>
    </>
  );
};

export default Screen;
