import React from 'react';

import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import mapModifiers from 'utils/functions';

export interface CardLayerProps {
  thumbnail: string;
  title?: string;
  description?: string;
  href?: string;
  target?: string;
  ratio?: Ratio;
  isBold?: boolean;
  modifiers?: ('r15' | 'r12' | 'filter' | 'hover' | 'pd-6x20' | 'pd-8x16' | 'pd-24x16' | 'pd-6x16')[];
  noContent?: boolean;
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
  noContent,
}) => (
  <div className={mapModifiers('o-cardLayer', modifiers)}>
    <Link href={href} target={target}>
      <div className="o-cardLayer_image">
        <Image src={thumbnail} alt={title} ratio={ratio || '258x334'} />
      </div>
    </Link>
    {
      !noContent && (
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
      )
    }
  </div>
);

export default React.memo(CardLayer);
