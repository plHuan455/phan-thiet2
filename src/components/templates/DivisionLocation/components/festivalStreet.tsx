import React from 'react';

import imgLight from 'assets/images/divisionLocation/festivalStreet.png';
import Image from 'components/atoms/Image';

const Line:React.FC = () => (
  <path className="division-line" d="M910 540.5C908.8 536.5 901.167 534.167 897.5 533.5L879.5 553C896.667 564.5 935.9 589.9 955.5 599.5C980 611.5 995.5 636.5 999.5 639.5C1002.7 641.9 1017.5 625.167 1024.5 616.5C989.333 596 917.9 554.2 913.5 551C908 547 911.5 545.5 910 540.5Z" stroke="#FFFEF8" strokeWidth="6" />
);

const ImageShine:React.FC = () => (
  <div className="division-image festivalStreet">
    <Image src={imgLight} alt="festivalStreet" />
  </div>
);

export default {
  Line,
  ImageShine,
};
