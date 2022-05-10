import React, { useMemo } from 'react';

import useDeviceQueries from 'hooks/useDeviceQueries';
import mapModifiers from 'utils/functions';

export type SizeImageType = 'cover' | 'contain' | 'inherit' | 'initial';

export type ImageProps = {
  src?: string;
  srcTablet?: string;
  srcMobile?: string;
  alt?: string;
  ratio?: Ratio;
  size?: SizeImageType;
  loading?: 'lazy' | 'eager' | undefined;
}

const Image: React.FC<ImageProps> = ({
  src = '',
  srcMobile = undefined,
  srcTablet = undefined,
  alt = 'replacing',
  ratio = '1x1',
  size = 'cover',
  loading = 'lazy',
}) => {
  const { isMobile, isTablet } = useDeviceQueries();
  const sourceImage = useMemo(() => {
    if (isMobile) {
      return srcMobile || src;
    }
    if (isTablet) {
      return srcTablet || src;
    }
    return src;
  }, [isMobile, isTablet, src, srcMobile, srcTablet]);

  return (
    <div className={mapModifiers('a-image', ratio, size)}>
      <img src={sourceImage} alt={alt} loading={loading} />
    </div>
  );
};

Image.defaultProps = {};

export default React.memo(Image);
