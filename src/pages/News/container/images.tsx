import React from 'react';

import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Image from 'components/atoms/Image';
import { CardPlayerProps } from 'components/organisms/Card/Player';

export interface CardImageProps {
  thumbnail: string,
  alt?: string,
  href?: string,
  handleClick?: () => void
}
interface ImagesProps {
  dataList: CardPlayerProps[]
}

const CardImage: React.FC<CardImageProps> = ({ thumbnail, alt, handleClick }) => (
  <div className="o-cardImage">
    <div
      className="o-cardImage_wrapper"
      onClick={() => {
        if (handleClick) handleClick();
      }}
    >
      <Image src={thumbnail} alt={alt || 'card thumbnail'} ratio="354x221" />
    </div>
  </div>
);

const Images: React.FC<ImagesProps> = ({ dataList }) => (
  <div className="s-images">
    <Container>
      <FlatMore
        title={{
          text: 'HÌNH ẢNH',
          type: 'h4',
          modifiers: ['gradientGreen', '700', 's015', 'uppercase'],
        }}
        data={dataList}
        render={(item) => (
          <CardImage
            {...item}
          />
        )}
      />
    </Container>
  </div>
);

export default Images;
