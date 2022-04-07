import React from 'react';

import imgLight from 'assets/images/divisionLocation/floridaSecond.png';
import Image from 'components/atoms/Image';

const Line:React.FC = () => (
  <path className="division-line" d="M989 319.5L973.5 343.5L988 348C1011 355.5 1044.24 363.996 1052.5 366.5C1069 371.5 1101 380.833 1118.5 386.5C1145.67 395.833 1199.6 413.1 1206 415.5C1212.4 417.9 1261 437.167 1284.5 446.5L1315.5 423C1307.5 419.167 1287.9 410.2 1275.5 405C1263.1 399.8 1191.33 377.167 1157 366.5L1118.5 357L1047.5 337.5L989 319.5Z" stroke="#FFFEF8" strokeWidth="6" />
);

const ImageShine:React.FC = () => (
  <div className="division-image floridaSecond">
    <Image src={imgLight} alt="floridaSecond" />
  </div>
);

export default {
  Line,
  ImageShine,
};
