import React from 'react';

import marker from 'assets/images/projectPosition/marker.png';
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
  modifiers?: 'marker' | 'utilities';
  utilitiesIcon?: {
    number: string;
    fillColor: string;
  }
}

const MarkerCard: React.FC<MarkerCardProps> = ({
  active,
  imgSrc,
  title,
  handleHover,
  handleLeave,
  modifiers,
  utilitiesIcon,
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
    {
      modifiers === 'marker' && (
        <div className="m-markerCard_marker" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
          <Image src={marker} ratio="24x34" alt="marker" />
        </div>
      )
    }
    {
      modifiers === 'utilities' && (
        <div className="m-markerCard_utilityMarker" style={{ backgroundColor: utilitiesIcon?.fillColor }} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
          <div className="m-markerCard_utilityMarker-circle" style={{ borderColor: utilitiesIcon?.fillColor, boxShadow: `0 0 10px ${utilitiesIcon?.fillColor}` }} />
          <Text modifiers={['700', 'white', 'center', '14x20']} content={utilitiesIcon?.number} />
        </div>
      )
    }
  </div>
);

export default MarkerCard;
