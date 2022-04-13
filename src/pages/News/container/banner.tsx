import React from 'react';

import BannerTemplate, { BannerProps } from 'components/templates/Banner';

const Banner: React.FC<BannerProps> = (props) => (
  <div className="s-banner">
    <BannerTemplate {...props} />
  </div>
);

export default Banner;
