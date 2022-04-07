import React from 'react';

import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';

export interface CardFeedbackProps {
  imgSrc: string;
  job:string
  name:string;
  comment: string;
}

const CardFeedback: React.FC<CardFeedbackProps> = ({
  imgSrc,
  name,
  comment,
  job,
}) => (
  <div className="o-cardFeedback">
    <div className="o-cardFeedback_content">
      <div className="o-cardFeedback_image">
        <Image src={imgSrc} alt={name} ratio="1x1" />
      </div>
      <Text modifiers={['14x20', '400', 'gambogeOrange', 'center']} content={job} />
      <div className="u-mt-8">
        <Text modifiers={['20x32', '700', 'black', 'center']} content={name} />
      </div>
      <div className="o-cardFeedback_comment u-mt-12">
        <Text modifiers={['16x28', '400', 'davyGrey']} content={comment} />
      </div>
    </div>
  </div>
);

export default React.memo(CardFeedback);
