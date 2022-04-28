import React, {
  useReducer, useMemo, useState, useCallback, useEffect,
} from 'react';

import settings from '../hook/settings';

import Section from './section';

import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Image from 'components/atoms/Image';
import Card from 'components/organisms/Card';
import PopupImage from 'components/templates/PopupImage';
import { useAsync } from 'hooks/useAsync';
import useScrollInfinite from 'hooks/useScrollInfinite';
import { getOverviewListService } from 'services/overviews';
import { OverviewImageType, PaginationOverview } from 'services/overviews/types';
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
  images?: PaginationOverview<OverviewImageType>;
  keyword?: string;
}

const reducer = (state: ImageState, action: ActionWithPayload) => {
  switch (action.type) {
    case 'update_image':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const CardImage:React.FC<CardImageProps> = ({
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

type Meta = {
  page: number;
  lastPage: number;
}

const Images: React.FC<ImagesProps> = ({ images, blocks, keyword }) => {
  const imageBlocks = getBlockData<ImagesBlock>('image', blocks);

  const [state, dispatch] = useReducer(reducer, {
    isOpen: false,
    currentImgIdx: 0,
  });
  const [meta, setMeta] = useState<Meta>({ page: 1, lastPage: 1 });
  const [dataLoadMore, setDataLoadMore] = useState<CardImageProps[]>([]);

  const updateImageState = (payload: ImageState) => {
    dispatch({
      type: 'update_image',
      payload,
    });
  };

  const formatData = useCallback((item:OverviewImageType):CardImageProps => ({
    thumbnail: baseURL(item.path),
  }), []);

  const [imageExecute, imagesState] = useAsync(getOverviewListService, {
    onSuccess: (res) => {
      const result = res.images.data.map(formatData);
      setMeta((prev) => ({ ...prev, page: res.images.currentPage }));
      setDataLoadMore(
        (prev) => ([...(prev || []), ...result]),
      );
    },
  });

  const dataInitial = useMemo(
    () => images?.data.map(formatData) || [],
    [formatData, images?.data],
  );

  const imageList = useMemo(() => [...dataInitial, ...dataLoadMore], [dataInitial, dataLoadMore]);

  useEffect(() => {
    setDataLoadMore([]);
    if (images) {
      setMeta({
        page: images.currentPage,
        lastPage: images.lastPage,
      });
    }
  }, [images]);

  const handleLoadMore = useCallback(() => {
    if (!imagesState.loading
      && meta.page < meta.lastPage) {
      imageExecute({
        limit: 6,
        page: meta.page + 1,
        keyword,
        type: 'image',
      });
    }
  }, [imageExecute, imagesState.loading, keyword, meta]);

  const { setNode } = useScrollInfinite(handleLoadMore);

  if (!images?.total) return null;

  return (
    <Section>
      <div className={`s-images ${imagesState.loading ? 'loading-block' : ''}`}>
        <Container>
          <FlatMore
            settings={{
              ...settings(),
            }}
            title={{
              text: baseString(imageBlocks?.title),
              type: 'h4',
              modifiers: ['gradientGreen', '700', 's015', 'uppercase'],
            }}
            data={imageList}
            render={(item, itemIdx) => (
              <Card.LoadMore
                ref={(ref) => (itemIdx === imageList.length - 1 ? setNode(ref) : undefined)}
                loading={itemIdx === imageList.length - 1 && imagesState.loading}
              >
                <CardImage
                  {...item}
                  handleClick={() => updateImageState({ isOpen: true, currentImgIdx: itemIdx })}
                />
              </Card.LoadMore>
            )}
          />
        </Container>
        <PopupImage
          isOpen={state.isOpen || false}
          handleClose={() => updateImageState({ isOpen: false })}
          currentImgIdx={state.currentImgIdx}
          dataImageList={imageList?.map((item) => item.thumbnail) || []}
          handleLoadMore={handleLoadMore}
          loading={imagesState.loading}
        />
      </div>
    </Section>
  );
};

Images.defaultProps = {
  images: undefined,
  keyword: undefined,
};

export default Images;
