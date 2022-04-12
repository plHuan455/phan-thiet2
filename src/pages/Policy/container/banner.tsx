import React, { useMemo } from 'react';

import BannerTemplate from 'components/templates/Banner';
import { baseURL, getBannerData } from 'utils/functions';

export interface BannerProps{
  banners: BannersDataTypes[]
}

const Banner: React.FC<BannerProps> = ({ banners }) => {
  const bannerData = useMemo(() => ({
    image: banners.map((item) => ({
      src: baseURL(item.data.imageDesktop),
      srcTablet: baseURL(item.data.imageTablet),
      srcMobile: baseURL(item.data.imageMobile),
    }))[0],
    title: getBannerData(banners[0].type, banners)?.title,
  }), [banners]);

  return (
    <BannerTemplate {...bannerData} isLayer />
  );
};

export default Banner;
