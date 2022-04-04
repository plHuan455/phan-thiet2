import React from 'react';

import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import mapModifiers from 'utils/functions';

export interface CardPlayerProps {
  thumbnail: string;
  title?: string;
  dateTime?: string;
  tag?: string;
  isReverse?: boolean;
  onClick?: () => void;
}

const CardPlayer: React.FC<CardPlayerProps> = ({
  thumbnail,
  dateTime,
  tag,
  title,
  isReverse,
  onClick,
}) => (
  <div className={mapModifiers('o-cardPlayer', isReverse && 'reverse')}>
    <button type="button" className="o-cardPlayer_thumbnail" onClick={onClick}>
      <Image src={thumbnail} alt="card-thumbnail" ratio="354x221" />

      <div className="o-cardPlayer_player">
        <Icon iconName="playVideo" size="12x14" />
      </div>
    </button>

    <div className="o-cardPlayer_content">
      <div className="o-cardPlayer_title">
        <Text modifiers={['700', '14x20', 'raisinBlack']} content={title} />
      </div>
      <div className="u-mt-12" />
      <div className="d-flex align-items-center">
        <Text modifiers={['400', '12x20', 'davyGrey']} content={dateTime} />
        {tag && (
          <>
            <div className="u-mr-8" />
            <Icon iconName="dot" size="16" />
            <Text
              modifiers={['400', '14x20', 'gradientGreen']}
              content={tag}
            />
          </>
        )}
      </div>
    </div>
  </div>
);

CardPlayer.defaultProps = {};

export default React.memo(CardPlayer);
