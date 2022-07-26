import React from 'react';

import Icon, { IconName } from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';

export interface CardNormalProps {
  thumbnail?: string;
  title?: string;
  href?: string;
  target?: string;
  dateTime?: string;
  tag?: LinkTypes;
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
            <Link href={tag?.url} target={tag?.target}>
              <Text
                modifiers={['400', '12x20', 'gradientGreen']}
                content={tag?.text}
              />
            </Link>
          </>
        )}
      </div>
      <div className="u-mt-md-16 u-mt-12" />
      <div className="o-cardNormal_title">
        <Link href={href} target={target}>
          <Text modifiers={['raisinBlack', '700', '20x32', 's015']}>
            {title}
          </Text>
        </Link>
      </div>
      <div className="u-mt-md-16 u-mt-12" />
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

export default React.memo(CardNormal);
