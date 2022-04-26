import React, { useMemo } from 'react';

import Image from 'components/atoms/Image';
import useDeviceQueries from 'hooks/useDeviceQueries';

export interface DivisionBannerProps {
  banner?: BannersDataTypes[];
}

const DivisionBanner: React.FC<DivisionBannerProps> = ({ banner }) => {
  const { isMobile, isTablet } = useDeviceQueries();

  const thumbnail = useMemo(() => {
    if (!banner) return '';
    const { data } = banner[0];
    if (isMobile) return data?.imageMobile;
    if (isTablet) return data?.imageTablet;
    return data?.imageDesktop;
  }, [banner, isMobile, isTablet]);

  return (
    <div className="t-divisionBanner">
      <div className="t-divisionBanner_thumbnail">
        <Image src={thumbnail} alt={banner && banner[0].data?.title} ratio="1366x933" />
      </div>
    </div>
  );
};

DivisionBanner.defaultProps = {
};

export default DivisionBanner;
