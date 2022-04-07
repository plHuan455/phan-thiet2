import React from 'react';

import Banner, { BannerProps } from 'components/templates/Banner';

const BannerSearchContainer: React.FC<BannerProps> = (props) => (
  <div className="s-bannerSearch">
    <Banner {...props} />
  </div>
);

export default BannerSearchContainer;
