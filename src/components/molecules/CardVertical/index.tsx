import React, { useEffect, useState } from 'react';

import Icon, { IconName, IconSize } from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import useCountDown from 'hooks/useCountDown';
import mapModifiers, { countDownFn } from 'utils/functions';

export interface CardVerticalProps {
  thumbnail: string;
  dateTime?: string;
  location?: string; // unknown
  title?: string;
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
  btnMore?: {
    label: string;
    href: string;
    target: string;
    icon:{
      name: IconName;
      size: IconSize;
    }
  };
  type: string; // 'event' | 'search' | 'video' | 'document'
  isShadow?: boolean;
  timeCountDown?: string
}

interface ContentItemProps {
  iconName: 'calendar' | 'clock' | 'location';
  label: string;
}

const ContentItem = ({ iconName, label }: ContentItemProps) => (
  <div className="m-cardVertical_listContent_item">
    <div className="m-cardVertical_listContent_icon">
      <Icon iconName={iconName} size="20" />
    </div>
    <div className="m-cardVertical_listContent_label">
      <Text modifiers={['400', '14x20', 'raisinBlack']} content={label} />
    </div>
  </div>
);

const CardVertical: React.FC<CardVerticalProps> = ({
  thumbnail,
  dateTime,
  location,
  title,
  content,
  btnMore,
  type,
  path,
  isShadow,
  timeCountDown = '',
}) => {
  const countdown = useCountDown({ endTime: timeCountDown });
  // test countdown
  const [active, setActive] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 1000);
  }, []);
  // --------------------
  return (
    <div className="m-cardVertical">
      <div className={mapModifiers('m-cardVertical_wrapper', isShadow && 'isShadow')}>
        <div className="m-cardVertical_flex">
          <div className="m-cardVertical_thumbnail">
            <Link
              href={path.href}
              target={path.target}
              className="m-cardHorizontal_link"
            >
              <Image src={thumbnail} alt="card-thumbnail" ratio="354x199" />
            </Link>
          </div>
          {type === 'event' && timeCountDown && (
          // change state active to timeCountDown
          <div className={mapModifiers('m-cardVertical_countDown', active && 'active')}>
            <div className="m-cardVertical_countDown_wrapper">
              <Text
                modifiers={['400', '14x20', 'white']}
                content={`Còn ${countDownFn(countdown.days, countdown.hours, countdown.mins, countdown.secs)}`}
              />
            </div>
          </div>
          )}
          <div className={`m-cardVertical_content m-cardVertical_type-${type}`}>
            {(dateTime || location) && (
            <div className="m-cardVertical_breadcrum">
              {dateTime && (
              <div className="m-cardVertical_breadcrum_time">
                <Text
                  modifiers={['400', '12x20', 'davyGrey']}
                  content={dateTime}
                />
              </div>
              ) }
              <div className="m-cardVertical_breadcrum_location">
                <Text
                  modifiers={['400', '14x20', 'gradientGreen']}
                  content={location}
                />
              </div>
            </div>
            )}
            <div className="m-cardVertical_title">
              <Link
                href={path.href}
                target={path.target}
                className="m-cardHorizontal_link"
              >
                <Text modifiers={['raisinBlack', '700', 'fontSvnGotham', '20x32']}>
                  {title}
                </Text>
              </Link>
            </div>
            {content && (
            <div className="m-cardVertical_listContent">
              <ContentItem
                iconName="clock"
                label={`${content?.startDate} - ${content?.endDate}`}
              />
              <ContentItem
                iconName="calendar"
                label={content?.dateTime}
              />
              <ContentItem
                iconName="location"
                label={content?.address}
              />
            </div>
            )}
            {btnMore && (
            <Link href={btnMore.href} target={btnMore.target}>
              <div className="animate animate-arrowSlide m-cardVertical_btnMore">
                <Text modifiers={['14x20', '400', 'copper']} content="Xem thêm" />
                <Icon iconName={btnMore.icon.name} size={btnMore.icon.size} />
              </div>
            </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

CardVertical.defaultProps = {

};
export default CardVertical;
