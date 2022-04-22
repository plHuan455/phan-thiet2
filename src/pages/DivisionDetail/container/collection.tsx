import React, { useCallback, useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import DivisionCollection from 'components/templates/DivisionCollection';
import PopupImage from 'components/templates/PopupImage';
import getImageListService from 'services/image';
import { SubdivisionCollectionTypes } from 'services/subdivision/types';
import { baseString, baseURL } from 'utils/functions';

interface CollectionProps {
  subDivisionId?: number;
  data?: SubdivisionCollectionTypes;
}

const Collection: React.FC<CollectionProps> = ({
  data,
  subDivisionId,
}) => {
  const [open, setOpen] = useState<string[] | undefined>(undefined);
  const { data: imageList } = useQuery(
    ['getCollection'], () => getImageListService({
      subdivision_id: String(subDivisionId),
    }),
  );

  const dataCollection = useMemo(() => imageList?.data.map((item) => ({
    id: item.id,
    title: item.name,
    color: item.color,
    // TODO: Translations later
    button: {
      text: 'Xem thêm',
    },
    thumbnail: baseURL(item.thumbnailSubdivision),
  })), [imageList]);

  const handleOpenPopup = useCallback(
    (id: number | undefined) => {
      imageList?.data.forEach((item) => {
        if (item.id === id) {
          const listImg = item.images.map((img) => baseURL(img.path));
          if (listImg.length) {
            setOpen(listImg);
          }
        }
      });
    }, [imageList?.data],
  );

  if (!data?.active) return null;

  return (
    <section>
      <DivisionCollection
        dataList={dataCollection || []}
        title={baseString(data?.title)}
        description={data?.description}
        handleClick={handleOpenPopup}
      />
      <PopupImage
        isOpen={!!open}
        dataImageList={open || []}
        handleClose={() => setOpen(undefined)}
      />
    </section>
  );
};

Collection.defaultProps = {
  data: undefined,
  subDivisionId: undefined,
};

export default Collection;
