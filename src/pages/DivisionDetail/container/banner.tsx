import React, { useMemo } from 'react';

import DivisionBanner from 'components/templates/DivisionBanner';
import { baseURL } from 'utils/functions';

const Banner: React.FC<SectionBanners> = ({ banners }) => {
  const banner = useMemo(() => [
    {
      data: {
        link: banners[0]?.data?.link,
        title: banners[0]?.data?.title,
        subTitle: banners[0]?.data?.subTitle,
        imageMobile: baseURL(banners[0]?.data?.imageMobile),
        imageTablet: baseURL(banners[0]?.data?.imageTablet),
        imageDesktop: baseURL(banners[0]?.data?.imageDesktop),
      },
    },
  ], [banners]);
  return (
    <DivisionBanner banner={banner} />
  );
};

export default Banner;
