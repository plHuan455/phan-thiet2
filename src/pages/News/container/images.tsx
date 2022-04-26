import React, { useReducer, useMemo } from 'react';

import Section from './section';

import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Image from 'components/atoms/Image';
import PopupImage from 'components/templates/PopupImage';
import { OverviewImageType } from 'services/overviews/types';
import { baseString, baseURL, getBlockData } from 'utils/functions';

export interface CardImageProps {
  thumbnail: string;
  alt?: string;
  href?: string;
  handleClick?: () => void;
}

interface ImageState {
  isOpen?: boolean;
  currentImgIdx?: number;
}

interface ActionWithPayload {
  type: string;
  payload: ImageState;
}

interface ImagesBlock {
  title: string;
}
interface ImagesProps extends SectionBlocks {
  images?: OverviewImageType[];
}

const reducer = (state: ImageState, action: ActionWithPayload) => {
  switch (action.type) {
    case 'update_image':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const CardImage: React.FC<CardImageProps> = ({
  thumbnail,
  alt,
  handleClick,
}) => (
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

const Images: React.FC<ImagesProps> = ({ images, blocks }) => {
  const imageBlocks = getBlockData<ImagesBlock>('image', blocks);

  const [state, dispatch] = useReducer(reducer, {
    isOpen: false,
    currentImgIdx: 0,
  });

  const updateImageState = (payload: ImageState) => {
    dispatch({
      type: 'update_image',
      payload,
    });
  };

  const imageList = useMemo(() => {
    if (Array.isArray(images)) {
      return images?.map((item) => ({
        thumbnail: baseURL(item.path),
      }));
    }
    return [];
  }, [images]);

  if (!images?.length) return null;

  return (
    <Section>
      <div className="s-images">
        <Container>
          <FlatMore
            title={{
              text: baseString(imageBlocks?.title),
              type: 'h4',
              modifiers: ['gradientGreen', '700', 's015', 'uppercase'],
            }}
            data={imageList}
            render={(item, itemIdx) => (
              <CardImage
                {...item}
                handleClick={() => updateImageState({ isOpen: true, currentImgIdx: itemIdx })}
              />
            )}
          />
        </Container>
        <PopupImage
          isOpen={state.isOpen || false}
          handleClose={() => updateImageState({ isOpen: false })}
          currentImgIdx={state.currentImgIdx}
          dataImageList={imageList?.map((item) => item.thumbnail) || []}
        />
      </div>
    </Section>
  );
};

Images.defaultProps = {
  images: [],
};

export default Images;
