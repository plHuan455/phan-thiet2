import React from 'react';

import imgLight from 'assets/images/divisionLocation/pgaGolf.png';
import Image from 'components/atoms/Image';

const Line:React.FC = () => (
  <path className="division-line" d="M971.5 320.5L962 338C937.833 327.833 885.4 305.7 869 298.5C838 281.5 689 240.5 634 230C610.091 225.436 619 219.364 623.5 217.5C651.5 205.9 807.833 252.667 882.5 277.5L878 285.5L971.5 320.5Z" stroke="#FFFEF8" strokeWidth="6" />
);

const ImageShine:React.FC = () => (
  <div className="division-image pgaGolf">
    <Image src={imgLight} alt="pgaGolf" />
  </div>
);

export default {
  Line,
  ImageShine,
};
