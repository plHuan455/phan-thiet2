import React from 'react';

import marker from 'assets/images/projectMap/marker.png';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import mapModifiers from 'utils/functions';

export interface MarkerCardProps {
  id?: number
  active?: boolean
  imgSrc: string
  title: string
  handleHover?: () => void;
  handleLeave?: () => void;
}

const MarkerCard: React.FC<MarkerCardProps> = ({
  active,
  imgSrc,
  title,
  handleHover,
  handleLeave,
}) => (
  <div className={mapModifiers('m-markerCard', active && 'active')}>
    <div className="m-markerCard_content">
      <div className="m-markerCard_content-img">
        <Image src={imgSrc} ratio="367x204" alt={title} />
      </div>
      <div className="m-markerCard_content-title">
        <Text modifiers={['16x28', '400', 'davyGrey']} content={title} />
      </div>
    </div>
    <div className="m-markerCard_marker" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
      <Image src={marker} ratio="24x34" alt="marker" />
    </div>
  </div>
);

export default MarkerCard;
