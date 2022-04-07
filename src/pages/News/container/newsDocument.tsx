import React from 'react';

import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Card from 'components/organisms/Card';
import { CardNormalProps } from 'components/organisms/Card/Normal';

interface NewsDocumentProps {
  dataList: CardNormalProps[]
}

const NewsDocument: React.FC<NewsDocumentProps> = ({ dataList }) => (
  <div className="s-newsDocument">
    <Container>
      <FlatMore
        title={{
          text: 'Tài liệu khác',
          type: 'h4',
          modifiers: ['gradientGreen', '700', 's015'],
        }}
        link={{
          text: 'Xem tất cả',
          href: '/',
        }}
        data={dataList}
        render={(item) => (
          <Card.Normal
            {...item}
          />
        )}
      />
    </Container>
  </div>
);

export default NewsDocument;
