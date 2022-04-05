import React from 'react';

import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import mapModifiers from 'utils/functions';

// type Radius = '15';

export interface CardLayerProps {
  thumbnail: string;
  title?: string;
  description?: string;
  href?: string;
  target?: string;
  ratio?: Ratio;
  isBold?: boolean;
  // isHover?: boolean;
  // isFilter?: boolean;
  // radius?: Radius;
  modifiers?: ('r15' | 'r12' | 'filter' | 'hover')[]
}

const CardLayer: React.FC<CardLayerProps> = ({
  thumbnail,
  title,
  href,
  target,
  description,
  ratio,
  isBold,
  modifiers,
}) => (
  <div className={mapModifiers('o-cardLayer', modifiers)}>
    <Link href={href} target={target}>
      <div className="o-cardLayer_image">
        <Image src={thumbnail} alt={title} ratio={ratio || '258x334'} />
      </div>
    </Link>
    <div className="o-cardLayer_content">
      <Link href={href} target={target}>
        <div className="o-cardLayer_content-title">
          <Text modifiers={['16x28', 'white', isBold ? '700' : '400']} content={title} />
        </div>
      </Link>
      {
        modifiers?.includes('hover') && (
          <div className="o-cardLayer_content-desc">
            <Text modifiers={['16x28', 'white', '400']} content={description} />
          </div>
        )
      }
    </div>
  </div>
);

export default React.memo(CardLayer);
