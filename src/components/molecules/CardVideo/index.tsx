import React from 'react';

import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';

export interface CardVideoProps {
  thumbnail: string;
  dateTime?: string;
  location?: string; // unknown
  subTitle?:string;
  title?: string;
  description?: string;
  path:{
    href: string;
    target: string;
  }
  content?: {
    startDate: string;
    endDate: string;
    dateTime: string;
    address: string;
  };
  type: string; // 'default' | 'reverse'
}

const CardVideo: React.FC<CardVideoProps> = ({
  thumbnail,
  dateTime,
  location,
  title,
  path,
  type,
}) => (
  <div className="m-cardVideo">
    <div className="m-cardVideo_wrapper">
      <div className="m-cardVideo_flex">
        <div className="m-cardVideo_thumbnail">
          <Link
            href={path.href}
            target={path.target}
            className="m-cardHorizontal_link"
          >
            <Image src={thumbnail} alt="card-thumbnail" ratio="354x221" />
          </Link>

          <div className="m-cardVideo_video">
            <button type="button" className="m-cardVideo_video_btnVideo">
              <Icon iconName="playVideo" size="18" />
            </button>
          </div>
        </div>

        <div className={`m-cardVideo_content m-cardVideo_type-${type}`}>
          <div className="m-cardVideo_title">
            <Link
              href={path.href}
              target={path.target}
              className="m-cardHorizontal_link"
            >
              <Text
                modifiers={['700', '14x20', 'raisinBlack']}
                content={title}
              />
            </Link>
          </div>

          <div className="m-cardVideo_breadcrum">
            {dateTime && (
              <div className="m-cardVideo_breadcrum_time">
                <Text
                  modifiers={['400', '12x20', 'davyGrey']}
                  content={dateTime}
                />
              </div>
            ) }
            <div className="m-cardVideo_breadcrum_location">
              <Text
                modifiers={['400', '14x20', 'gradientGreen']}
                content={location}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
);

CardVideo.defaultProps = {

};
export default CardVideo;
