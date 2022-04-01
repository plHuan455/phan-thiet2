import React from 'react';

import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';

interface SubDivisionCardProps {
  imgSrc: string;
  title: string;
  description: string;
  href?: string;
  target?: string;
}

const SubDivisionCard: React.FC<SubDivisionCardProps> = ({
  imgSrc,
  title,
  description,
  href,
  target,
}) => (
  <div className="m-subDivisionCard">
    <Link href={href} target={target}>
      <div className="m-subDivisionCard_image">
        <Image src={imgSrc} ratio="354x221" alt={title} />
      </div>
    </Link>
    <div className="m-subDivisionCard_content">
      <Link href={href} target={target}>
        <div className="m-subDivisionCard_content-title">
          <Text content={title} modifiers={['20x32', '700', 'raisinBlack', 's015']} />
        </div>
      </Link>
      <div className="m-subDivisionCard_desc u-mt-8">
        <Text content={description} modifiers={['12x20', '400', 'davyGrey']} />
      </div>
      <Link href={href} target={target}>
        <div className="animate animate-arrowSlide d-flex align-items-center u-mt-12">
          {/* // TODO: Translation */}
          <Text modifiers={['14x20', '400', 'copper']} content="Xem thêm" />
          <div className="u-ml-8">
            <Icon iconName="arrowRightCopper" size="16" />
          </div>
        </div>
      </Link>
    </div>
  </div>
);

SubDivisionCard.defaultProps = {
  href: undefined,
  target: '_self',
};

export default SubDivisionCard;
