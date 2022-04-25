import React, {
  useCallback, useMemo, useReducer,
} from 'react';
import { useQuery } from 'react-query';

import DivisionCollection from 'components/templates/DivisionCollection';
import PopupImage from 'components/templates/PopupImage';
import { getImageListService } from 'services/images';
import { SubdivisionCollectionTypes } from 'services/subdivision/types';
import { baseString, baseURL } from 'utils/functions';

interface CollectionState {
  images?: string[];
  isOpen?: boolean;
}

interface ActionWithPayload {
  type: string;
  payload?: CollectionState;
}

const reducer = (state: CollectionState, action: ActionWithPayload) => {
  switch (action.type) {
    case 'update_collection':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

interface CollectionProps {
  subDivisionId?: number;
  data?: SubdivisionCollectionTypes;
}

const Collection: React.FC<CollectionProps> = ({
  data,
  subDivisionId,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    images: [],
    isOpen: false,
  });

  const { data: imageList } = useQuery(
    ['getCollection'], () => getImageListService({
      subdivision_id: String(subDivisionId),
    }),
  );

  const dataCollection = useMemo(() => imageList?.data.map((item) => ({
    id: item.id,
    title: baseString(item.name),
    color: item.color,
    // TODO: Translations later
    button: {
      text: 'Xem thêm',
    },
    thumbnail: baseURL(item.thumbnailSubdivision),
  })) || [], [imageList]);

  const handleOpenPopup = useCallback(
    (id: number | undefined) => {
      const item = imageList?.data?.find((e) => e.id === id);
      if (item) {
        dispatch({
          type: 'update_collection',
          payload: {
            isOpen: true,
            images: item.images?.map((e) => baseURL(e.path)),
          },
        });
      }
    }, [imageList?.data],
  );

  if (!data?.active) return null;

  return (
    <section>
      <DivisionCollection
        dataList={dataCollection}
        title={baseString(data?.title)}
        description={data?.description}
        handleClick={handleOpenPopup}
      />
      <PopupImage
        isOpen={state.isOpen || false}
        dataImageList={state.images || []}
        handleClose={() => dispatch({
          type: 'update_collection',
          payload: {
            isOpen: false,
            images: [],
          },
        })}
      />
    </section>
  );
};

Collection.defaultProps = {
  data: undefined,
  subDivisionId: undefined,
};

export default Collection;
