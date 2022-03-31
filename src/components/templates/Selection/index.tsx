import React from 'react';

import selectionImage from 'assets/images/selection/image.png';
import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';

interface SelectionProps {
  title: string,
  image: string
}

const titleData = `LỰA CHỌN HOÀN HẢO
CHO ĐẦU TƯ, DU LỊCH
VÀ NGHỈ DƯỠNG`;

const Selection: React.FC<SelectionProps> = ({ title = titleData, image = selectionImage }) => (
  <div className="t-selection">
    <div className="t-selection_wrapper">
      <div className="t-selection_content">
        <div className="t-selection_title">
          <Heading type="h4" modifiers={['gradientGreen', '700', '32x48']}>
            {title}
          </Heading>
        </div>
      </div>
      <div className="t-selection_thumbnail">
        <Image src={image} alt="thumbnail" ratio="985x425" size="contain" />
      </div>
    </div>
  </div>
);

Selection.defaultProps = {
};

export default Selection;
