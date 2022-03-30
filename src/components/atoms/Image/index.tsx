import React, { useMemo } from 'react';

import useDeviceQueries from 'hooks/useDeviceQueries';
import mapModifiers from 'utils/functions';

export type SizeImageType = 'cover' | 'contain' | 'inherit' | 'initial';

interface ImageProps {
  src?: string;
  srcTablet?: string;
  srcMobile?: string;
  alt?: string;
  ratio?: Ratio;
  size?: SizeImageType;
}

const Image: React.FC<ImageProps> = ({
  src,
  srcMobile,
  srcTablet,
  alt,
  ratio,
  size,
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
      <img src={sourceImage} alt={alt} loading="lazy" />
    </div>
  );
};

Image.defaultProps = {
  srcMobile: undefined,
  srcTablet: undefined,
  src: undefined,
  ratio: '1x1',
  size: 'cover',
  alt: 'replacing',
};

export default React.memo(Image);
