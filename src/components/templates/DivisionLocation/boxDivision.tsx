import React from 'react';

import Heading from 'components/atoms/Heading';
import Text from 'components/atoms/Text';

export interface BoxDivisionProps {
  titleBox?: string;
  contentBox?: string;
}

const BoxDivision:React.FC<BoxDivisionProps> = ({
  titleBox,
  contentBox,
}) => (
  <div className="t-boxDivision">
    <div className="t-boxDivision_heading">
      <Heading content={titleBox} type="h5" modifiers={['700', 's015', 'uppercase', 'white']} />
    </div>
    <div className="t-boxDivision_content">
      <Text modifiers={['16x28', 'white']} content={contentBox} />
    </div>
  </div>
);

export default BoxDivision;
