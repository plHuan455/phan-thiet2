import React from 'react';

import imgLight from 'assets/images/divisionLocation/santa.png';
import Image from 'components/atoms/Image';

const Line:React.FC = () => (
  <path className="division-line" d="M565 359.5C579.4 359.5 591.333 351.5 595.5 347.5C608 338 619 345.5 619 347.5C592 378 601 379 609 385C617 391 619.5 414 619 423C616.5 423 598.5 421 593 415.5C572.5 397.5 549 380.833 531 370.5L540 359.5H565Z" stroke="#FFFEF8" strokeWidth="6" />
);

const ImageShine:React.FC = () => (
  <div className="division-image santa">
    <Image src={imgLight} alt="santa" />
  </div>
);

export default {
  Line,
  ImageShine,
};
