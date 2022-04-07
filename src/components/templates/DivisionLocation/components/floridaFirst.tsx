import React from 'react';

import imgLight from 'assets/images/divisionLocation/floridaFirst.png';
import Image from 'components/atoms/Image';

const Line:React.FC = () => (
  <path className="division-line" d="M1005 512.5L931.5 475L963 431.5H985C986.167 431.333 988.5 430.4 988.5 428C1002 426 1002.5 423.5 1005 419.5C994.2 397.1 975.167 381.5 967 376.5V354.5C969.499 350.5 968.299 350.6 973.499 343C983.499 346.5 1051 366.5 1096.5 380.5L1161.5 401C1185.67 408.5 1235.1 425.8 1253.5 433L1254.56 433.415C1272.13 440.29 1277.95 442.568 1284 446L1074.5 626L958 563L1005 512.5Z" stroke="#FFFEF8" strokeWidth="6" />
);

const ImageShine:React.FC = () => (
  <div className="division-image floridaFirst">
    <Image src={imgLight} alt="floridaFirst" />
  </div>
);

export default {
  Line,
  ImageShine,
};
