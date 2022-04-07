import React from 'react';

import imgLight from 'assets/images/divisionLocation/kingDom.png';
import Image from 'components/atoms/Image';

const Line:React.FC = () => (
  <path className="division-line" d="M556.211 254.5C560.211 259.7 557.878 270 556.211 274.5C573.378 276.167 613.011 280.6 634.211 285C660.711 290.5 660.711 305 656.211 316.5C652.611 325.7 633.711 335.667 624.711 339.5C620.378 344.333 610.211 356.4 604.211 366C598.211 375.6 606.711 380.333 611.711 381.5C627.878 374.667 669.011 356.1 704.211 336.5C748.211 312 736.711 291 726.711 283C713.437 272.38 657.711 258 637.211 254.5C616.711 251 568.711 238.5 553.211 237C537.711 235.5 551.211 248 556.211 254.5Z" stroke="#FFFEF8" strokeWidth="6" />
);

const ImageShine:React.FC = () => (
  <div className="division-image kingDom">
    <Image src={imgLight} alt="kingDom" />
  </div>
);

export default {
  Line,
  ImageShine,
};
