import React from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Animate from 'components/organisms/Animate';

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
        <Animate type="slideInRight" extendClassName="t-selection_thumbnail">
          <Image src={image} alt="thumbnail" ratio="912x455" size="cover" />
        </Animate>
        <div className="t-selection_layer" />
      </div>
    </div>
  </div>
);

Selection.defaultProps = {
};

export default Selection;
