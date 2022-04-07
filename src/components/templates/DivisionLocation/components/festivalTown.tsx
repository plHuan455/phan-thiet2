import React from 'react';

import imgLight from 'assets/images/divisionLocation/festivalTown.png';
import Image from 'components/atoms/Image';

const ImageShine:React.FC = () => (
  <div className="division-image festivalTown">
    <Image src={imgLight} alt="festivalTown" />
  </div>
);

const Line:React.FC = () => (
  <path className="division-line" d="M1189.61 315.565C1201.53 319.088 1323.28 351.58 1382.67 367.386L1315.94 422.932C1314.93 422.706 1308.9 420.29 1292.91 412.433C1269.54 399.223 1148.29 362.644 1126.61 358.58C1109.27 355.328 1027.71 331.484 989.1 319.968L1019.92 267.47C1071.52 282.034 1177.69 312.043 1189.61 315.565Z" stroke="#FFFEF8" strokeWidth="6" />
);

export default {
  Line,
  ImageShine,
};
