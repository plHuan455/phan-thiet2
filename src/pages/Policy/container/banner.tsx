import React from 'react';

import BannerTemplate, { BannerProps } from 'components/templates/Banner';

export interface BannerBlocks extends BannerProps{
}

const Banner: React.FC<BannerBlocks> = (props) => (
  <BannerTemplate {...props} isLayer />
);

export default Banner;
