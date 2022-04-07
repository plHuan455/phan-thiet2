import React from 'react';

import imgLight from 'assets/images/divisionLocation/waikiki.png';
import Image from 'components/atoms/Image';

const Line:React.FC = () => (
  <path className="division-line" d="M823.367 357.651L783.367 390.651C796.367 382.651 865.867 361.651 908.367 385.151C955.867 410.151 955.867 424.151 954.367 434.151L976.866 433.151L979.367 430.651C978.167 373.451 862.866 344.151 823.367 357.651Z" stroke="#FFFEF8" strokeWidth="6" />
);

const ImageShine:React.FC = () => (
  <div className="division-image waikiki">
    <Image src={imgLight} alt="waikiki" />
  </div>
);

export default {
  Line,
  ImageShine,
};
