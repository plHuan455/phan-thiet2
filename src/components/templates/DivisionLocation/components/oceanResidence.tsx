import React from 'react';

import imgLight from 'assets/images/divisionLocation/oceanResidence.png';
import Image from 'components/atoms/Image';

const ImageShine:React.FC = () => (
  <div className="division-image oceanResidence">
    <Image src={imgLight} alt="oceanResidence" />
  </div>
);

const Line:React.FC = () => (
  <path className="division-line" d="M105.841 107.752L212.841 134.252L134.341 173.252L24.3408 126.752L105.841 107.752Z" stroke="#FFFEF8" strokeWidth="5" />
);

export default {
  Line,
  ImageShine,
};
