import React from 'react';

import Icon, { IconName } from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import useCountDown from 'hooks/useCountDown';

export interface CardEventProps {
  endTime?: string;
  thumbnail: string;
  tag?: string;
  title?: string;
  summary?: {
    iconName: IconName,
    text: string;
  }[];
  href?: string;
  target?: string;
}

const CardEvent: React.FC<CardEventProps> = ({
  endTime,
  thumbnail,
  tag,
  title,
  summary,
  href,
  target,
}) => {
  const { hours, mins, secs } = useCountDown({ endTime: endTime || new Date().toISOString() });
  return (
    <div className="o-cardEvent">
      <Link href={href} target={target}>
        <div className="o-cardEvent_thumbnail">
          <Image alt={title} ratio="354x199" src={thumbnail} />
          <div className="o-cardEvent_endtime">
            {/* TODO: Translation later */}
            <Text modifiers={['400', '14x20', 'white']}>
              Còn
              {' '}
              {hours}
              :
              {mins}
              :
              {secs}
            </Text>
          </div>
        </div>
      </Link>
      <div className="o-cardEvent_content">
        <Text modifiers={['400', '14x20', 'gradientGreen']}>
          {tag}
        </Text>
        <div className="u-mt-md-16 u-mt-12" />
        <Link href={href} target={target}>
          <Text modifiers={['raisinBlack', '700', '20x32', 's015']}>
            {title}
          </Text>
        </Link>
        {summary?.map((e, i) => (
          <div className="u-mt-md-8 u-mt-4 d-flex align-items-center" key={`card-event-${i.toString()}`}>
            <div className="flex-shrink-0 icon">
              <Icon iconName={e.iconName} size="24" />
            </div>
            <div className="u-mt-md-16 u-ml-12" />
            <Text modifiers={['400', '14x20', 'raisinBlack']}>
              {e.text}
            </Text>
          </div>
        ))}
        <div className="u-mt-md-24 u-mt-16" />
        <Link target={target} href={href}>
          <div className="animate animate-arrowSlide d-flex align-items-center">
            {/* TODO: Translation later */}
            <Text modifiers={['14x20', '400', 'copper']} content="Xem thêm" />
            <div className="u-ml-8" />
            <Icon iconName="arrowRightCopper" size="16" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default React.memo(CardEvent);
