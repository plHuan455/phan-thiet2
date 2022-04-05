import React from 'react';

import bannerImage from 'assets/images/pages/contact/banner.png';
import BannerTemplate from 'components/templates/Banner';

const Banner: React.FC = () => (
  <>
    <BannerTemplate
      image={{ src: bannerImage }}
      title="CHÍNH SÁCH ĐIỀU KHOẢN"
      isLayer
    />
  </>
);

export default Banner;
