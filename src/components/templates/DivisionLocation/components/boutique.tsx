import React from 'react';

import imgLight from 'assets/images/divisionLocation/boutique.png';
import Image from 'components/atoms/Image';

const Line:React.FC = () => (
  <path className="division-line" d="M1285.28 465.529L1295.28 471.029C1294.08 474.229 1237.45 524.029 1209.28 548.529L1195.78 539.029L1285.28 465.529Z" stroke="#FFFEF8" strokeWidth="6" />
);

const ImageShine:React.FC = () => (
  <div className="division-image boutique">
    <Image src={imgLight} alt="boutique" />
  </div>
);

export default {
  Line,
  ImageShine,
};
