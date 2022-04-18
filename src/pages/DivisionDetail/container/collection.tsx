import React from 'react';

import layer1 from 'assets/images/divisionCollection/layer1.png';
import layer2 from 'assets/images/divisionCollection/layer2.png';
import layer3 from 'assets/images/divisionCollection/layer3.png';
import layer4 from 'assets/images/divisionCollection/layer4.png';
import DivisionCollection, { DivisionCollectionProps } from 'components/templates/DivisionCollection';

interface CollectionProps extends Omit<DivisionCollectionProps, 'dataList'> {
}

const Collection: React.FC<CollectionProps> = (props) => (
  <section>
    <DivisionCollection
      dataList={[
        {
          title: 'BERMUDA',
          color: 'rgba(0, 92, 143, 1)',
          button: {
            url: '/',
            text: 'Xem thêm',
            target: '_self',
          },
          thumbnail: layer1,
        },
        {
          title: 'SANTORINI',
          color: 'rgba(10, 182, 244, 1)',
          button: {
            url: '/',
            text: 'Xem thêm',
            target: '_self',
          },
          thumbnail: layer2,
        },
        {
          title: 'JAPAN',
          color: 'rgba(231, 73, 77, 1)',
          button: {
            url: '/',
            text: 'Xem thêm',
            target: '_self',
          },
          thumbnail: layer3,
        },
        {
          title: 'EDWARDIAN',
          color: 'rgba(187, 109, 63, 1)',
          button: {
            url: '/',
            text: 'Xem thêm',
            target: '_self',
          },
          thumbnail: layer4,
        },
        {
          title: 'BERMUDA',
          color: 'rgba(0, 92, 143, 1)',
          button: {
            url: '/',
            text: 'Xem thêm',
            target: '_self',
          },
          thumbnail: layer1,
        },
      ]}
      {...props}
    />
  </section>
);

export default Collection;
