import React from 'react';

import bannerImage from 'assets/images/pages/divisionList/banner.png';
import BannerTemplate from 'components/templates/Banner';

const Banner: React.FC = () => (
  <>
    <BannerTemplate
      image={{ src: bannerImage }}
    />
  </>
);

export default Banner;
