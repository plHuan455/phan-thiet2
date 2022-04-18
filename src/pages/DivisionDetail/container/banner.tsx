import React from 'react';

import DivisionBanner, { DivisionBannerProps } from 'components/templates/DivisionBanner';

interface BannerProps extends DivisionBannerProps {}

const Banner: React.FC<BannerProps> = (props) => (
  <DivisionBanner {...props} />
);

export default Banner;
