import React from 'react';

import Icon, { IconName } from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';

export interface CardNormalProps {
  thumbnail: string;
  title?: string;
  href?: string;
  target?: string;
  dateTime?: string;
  tag?: string;
  url?: {
    text?: string;
    iconName: IconName;
    animation?: 'download' | 'arrow';
  }
}

const CardNormal: React.FC<CardNormalProps> = ({
  thumbnail,
  title,
  href,
  target,
  dateTime,
  tag,
  url,
}) => (
  <div className="o-cardNormal">
    <Link href={href} target={target}>
      <div className="o-cardNormal_thumbnail">
        <Image alt={title} ratio="354x199" src={thumbnail} />
      </div>
    </Link>
    <div className="o-cardNormal_content">
      <div className="d-flex align-items-center">
        <Text modifiers={['400', '12x20', 'davyGrey']} content={dateTime} />
        {tag && (
          <>
            <Icon iconName="dot" size="16" />
            <Text
              modifiers={['400', '14x20', 'gradientGreen']}
              content={tag}
            />
          </>
        )}
      </div>
      <div className="u-mt-md-16 u-mt-12" />
      <Link href={href} target={target}>
        <Text modifiers={['raisinBlack', '700', '20x32', 's015']}>
          {title}
        </Text>
      </Link>
      <div className="u-mt-md-24 u-mt-16" />
      {url && (
        <Link target={target} href={href}>
          <div className={`animate animate-${url.animation === 'download' ? 'download' : 'arrowSlide'} d-flex align-items-center`}>
            <Text modifiers={['14x20', '400', 'copper']} content={url.text} />
            <div className="u-ml-8" />
            <Icon iconName={url.iconName} size="16" />
          </div>
        </Link>
      )}
    </div>
  </div>
);

export default CardNormal;
