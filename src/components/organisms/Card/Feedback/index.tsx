import React from 'react';

import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';

export interface CardFeedbackProps {
  imgSrc: string;
  job:string
  name:string;
  comment: string
  href?: string;
  target?: string;
}

const CardFeedback: React.FC<CardFeedbackProps> = ({
  imgSrc,
  name,
  comment,
  href,
  target,
  job,
}) => (
  <div className="m-feedbackCard">
    <div className="m-feedbackCard_image">
      <Link href={href} target={target}>
        <Image src={imgSrc} alt={name} ratio="1x1" />
      </Link>
    </div>
    <div className="m-feedbackCard_content">
      <div className="m-customerCard_content-job">
        <Text modifiers={['14x20', '400', 'gambogeOrange', 'center']} content={job} />
      </div>
      <div className="m-feedbackCard_content-name">
        <Link href={href} target={target}>
          <Text modifiers={['20x32', '700', 'black', 'center']} content={name} />
        </Link>
      </div>
      <div className="m-customerCard_content-comment">
        <Text modifiers={['16x28', '400', 'davyGrey']} content={comment} />
      </div>
    </div>
  </div>
);

export default React.memo(CardFeedback);
