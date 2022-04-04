import React from 'react';

import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import mapModifiers from 'utils/functions';

export interface CardVideoProps {
  thumbnail: string;
  title?: string;
  dateTime?: string;
  location?: string;
  isReverse?: boolean;
  onClick?: () => void;
}

const CardVideo: React.FC<CardVideoProps> = ({
  thumbnail,
  dateTime,
  location,
  title,
  isReverse,
  onClick,
}) => (
  <div className={mapModifiers('m-cardVideo', isReverse && 'reverse')}>
    <button type="button" className="m-cardVideo_thumbnail" onClick={onClick}>
      <Image src={thumbnail} alt="card-thumbnail" ratio="354x221" />

      <div className="m-cardVideo_player">
        <Icon iconName="playVideo" size="12x14" />
      </div>
    </button>

    <div className="m-cardVideo_content">
      <div className="m-cardVideo_title">
        <Text modifiers={['700', '14x20', 'raisinBlack']} content={title} />
      </div>
      <div className="u-mt-12" />
      <div className="d-flex align-items-center">
        <div className="m-cardVideo_breadcrum_time">
          <Text modifiers={['400', '12x20', 'davyGrey']} content={dateTime} />
        </div>
        {location && (
          <>
            <div className="u-mr-8" />
            <Icon iconName="dot" size="16" />
            <div className="m-cardVideo_breadcrum_location">
              <Text
                modifiers={['400', '14x20', 'gradientGreen']}
                content={location}
              />
            </div>
          </>
        )}
      </div>
    </div>
  </div>
);

CardVideo.defaultProps = {};
export default CardVideo;
