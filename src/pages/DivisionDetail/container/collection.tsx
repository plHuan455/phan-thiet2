import React from 'react';

import layer1 from 'assets/images/divisionCollection/layer1.png';
import layer2 from 'assets/images/divisionCollection/layer2.png';
import layer3 from 'assets/images/divisionCollection/layer3.png';
import layer4 from 'assets/images/divisionCollection/layer4.png';
import DivisionCollection from 'components/templates/DivisionCollection';
import { SubdivisionCollectionTypes } from 'services/subdivision/types';
import { baseString } from 'utils/functions';

interface CollectionProps {
  data?: SubdivisionCollectionTypes;
}

const Collection: React.FC<CollectionProps> = ({
  data,
}) => {
  if (!data?.active) return null;

  return (
    <section>
      <DivisionCollection
        dataList={[
          {
            id: 1,
            title: 'BERMUDA',
            color: 'rgba(0, 92, 143, 1)',
            button: {
              text: 'Xem thêm',
            },
            thumbnail: layer1,
          },
          {
            title: 'SANTORINI',
            color: 'rgba(10, 182, 244, 1)',
            button: {
              text: 'Xem thêm',
            },
            thumbnail: layer2,
          },
          {
            title: 'JAPAN',
            color: 'rgba(231, 73, 77, 1)',
            button: {
              text: 'Xem thêm',
            },
            thumbnail: layer3,
          },
          {
            title: 'EDWARDIAN',
            color: 'rgba(187, 109, 63, 1)',
            button: {
              text: 'Xem thêm',
            },
            thumbnail: layer4,
          },
          {
            title: 'BERMUDA',
            color: 'rgba(0, 92, 143, 1)',
            button: {
              text: 'Xem thêm',
            },
            thumbnail: layer1,
          },
        ]}
        title={baseString(data?.title)}
        description={data?.description}
        // handleClick={(id) => console.log(id)}
      />
    </section>
  );
};

Collection.defaultProps = {
  data: undefined,
};

export default Collection;
