import React from 'react';

import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';

export interface CardFeedbackProps {
  imgSrc: string;
  job:string
  name:string;
  comment: string;
  href?: string;
  target?: string;
}

const CardFeedback: React.FC<CardFeedbackProps> = ({
  imgSrc,
  name,
  comment,
  job,
  href,
  target,
}) => (
  <div className="o-cardFeedback">
    <div className="o-cardFeedback_content">
      <Link href={href} target={target}>
        <div className="o-cardFeedback_image">
          <Image src={imgSrc} alt={name} ratio="1x1" />
        </div>
      </Link>
      <Text modifiers={['14x20', '400', 'gambogeOrange', 'center']} content={job} />
      <Link href={href} target={target}>
        <div className="u-mt-8">
          <Text modifiers={['20x32', '700', 'black', 'center']} content={name} />
        </div>
      </Link>
      <div className="o-cardFeedback_comment u-mt-12">
        <Text modifiers={['16x28', '400', 'davyGrey']} content={comment} />
      </div>
    </div>
  </div>
);

export default React.memo(CardFeedback);
