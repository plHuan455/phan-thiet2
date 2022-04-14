import React, { useMemo } from 'react';

import BannerTemplate from 'components/templates/Banner';
import { baseURL, getBannerData } from 'utils/functions';

const Banner: React.FC<SectionBanners> = ({ banners }) => {
  const bannerData = useMemo(() => {
    const banner = getBannerData('basic', banners);
    return ({
      image: {
        src: baseURL(banner?.imageDesktop),
        srcTablet: baseURL(banner?.imageTablet),
        srcMobile: baseURL(banner?.imageMobile),
        alt: banner?.title,
      },
      title: banner?.title,
    });
  }, [banners]);

  return (
    <BannerTemplate {...bannerData} isLayer />
  );
};

export default Banner;
