import React from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';

interface SelectionProps {
  title: string,
  image: string
}

const Selection: React.FC<SelectionProps> = ({ title, image }) => (
  <div className="t-selection">
    <div className="container">
      <div className="t-selection_flex">
        <div className="t-selection_content">
          <div className="t-selection_title">
            <Heading type="h4" modifiers={['gradientGreen', '700', 's015']} content={title} />
          </div>
        </div>
        <div className="t-selection_thumbnail">
          <Image src={image} alt="thumbnail" ratio="912x455" size="cover" />
        </div>
        <div className="t-selection_layer" />
      </div>
    </div>
  </div>
);

Selection.defaultProps = {
};

export default Selection;
