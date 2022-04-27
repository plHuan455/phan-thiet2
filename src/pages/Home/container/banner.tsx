import React, { useMemo } from 'react';

import fly from 'assets/images/bannerHome/fly.png';
import BannerHome from 'components/templates/BannerHome';
import { baseURL, getBannerData, getBlockData } from 'utils/functions';

export interface BannerBlocks extends SectionBlocks {
  banners: BannersDataTypes[];
}

interface BannerItemProps {
  icon?: string;
  text?: string;
  image?: string;
}
interface BannerProps {
  item1?: BannerItemProps;
  item2?: BannerItemProps;
  item3?: BannerItemProps;
  item4?: BannerItemProps;
  content?: string;
}

const Banner: React.FC<BannerBlocks> = ({
  banners,
  blocks,
}) => {
  const bannerBlocks = getBlockData<BannerProps>('utilities', blocks);
  const bannerData = useMemo(() => {
    const banner = getBannerData('basic', banners);
    return ({
      src: baseURL(banner?.imageDesktop),
      srcTablet: baseURL(banner?.imageTablet),
      srcMobile: baseURL(banner?.imageMobile),
      alt: banner?.title,
    });
  }, [banners]);

  const utilitiesBlockContent = useMemo(() => {
    const data: (BannerItemProps & {srcLayer?: string})[] = [
      { ...bannerBlocks?.item1 },
      { ...bannerBlocks?.item2 },
      { ...bannerBlocks?.item3, srcLayer: fly },
      { ...bannerBlocks?.item4 },
    ];
    return data?.map((val) => ({
      srcImgMain: baseURL(val?.image),
      srcImgSub: baseURL(val?.icon),
      title: val?.text,
      srcLayer: val.srcLayer || undefined,
    }));
  }, [bannerBlocks]);

  return (
    <BannerHome
      description={bannerBlocks?.content}
      list={utilitiesBlockContent}
      banner={bannerData}
    />
  );
};

export default Banner;
