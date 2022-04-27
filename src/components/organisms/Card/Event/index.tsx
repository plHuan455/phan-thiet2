import React from 'react';

import Icon, { IconName } from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import useCountDown from 'hooks/useCountDown';
import i18n from 'i18n';
import mapModifiers from 'utils/functions';

export interface CardEventProps {
  endTime?: string;
  thumbnail: string;
  tag?: LinkTypes;
  title?: string;
  summary?: {
    iconName: IconName,
    text: string;
  }[];
  button?: LinkTypes;
}

const CardEvent: React.FC<CardEventProps> = ({
  endTime,
  thumbnail,
  tag,
  title,
  summary,
  button,
}) => {
  const { totalHours, mins, secs } = useCountDown({ endTime });
  const isEnd = !Number(totalHours) && !Number(mins) && !Number(secs);
  const { language } = i18n;

  return (
    <div className={mapModifiers('o-cardEvent', isEnd && 'end')}>
      <Link href={button?.url} target={button?.target}>
        <div className="o-cardEvent_thumbnail">
          <Image alt={title} ratio="354x199" src={thumbnail} />
          <div className="o-cardEvent_endtime">
            <Text modifiers={['400', '14x20', 'white']}>
              {language === 'vi' && 'Còn'}
              {' '}
              {totalHours}
              :
              {mins}
              :
              {secs}
              {' '}
              {language !== 'vi' && 'left'}
            </Text>
          </div>
        </div>
      </Link>
      <div className="o-cardEvent_content">
        <Link href={tag?.url} target={tag?.target}>
          <Text modifiers={['400', '14x20', 'gradientGreen']}>
            {tag?.text}
          </Text>
        </Link>
        <div className="u-mt-md-16 u-mt-12" />
        <Link href={button?.url} target={button?.target}>
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
        <div className="o-cardEvent_content-button u-mt-md-24 u-mt-16" />
        <Link target={button?.target} href={button?.url}>
          <div className="animate animate-arrowSlide d-flex align-items-center">
            <Text modifiers={['14x20', '400', 'copper']} content={button?.text} />
            <div className="u-ml-8" />
            <Icon iconName="arrowRightCopper" size="16" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default React.memo(CardEvent);
