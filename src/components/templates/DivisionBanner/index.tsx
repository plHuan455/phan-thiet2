import React from 'react';

import Image from 'components/atoms/Image';

export interface DivisionBannerProps {
  title?: string;
  thumbnail: string
}

const DivisionBanner: React.FC<DivisionBannerProps> = ({ title, thumbnail }) => (
  <div className="t-divisionBanner">
    <div className="t-divisionBanner_thumbnail">
      <Image src={thumbnail} alt={title} ratio="1366x933" />
    </div>
  </div>
);

DivisionBanner.defaultProps = {
};

export default DivisionBanner;
