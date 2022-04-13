import React from 'react';

import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Card from 'components/organisms/Card';
import { CardNormalProps } from 'components/organisms/Card/Normal';

interface DocumentsProps {
  dataList: CardNormalProps[]
}

const Documents: React.FC<DocumentsProps> = ({ dataList }) => (
  <div className="s-documents">
    <Container>
      <FlatMore
        title={{
          text: 'Tài liệu khác',
          type: 'h4',
          modifiers: ['gradientGreen', '700', 's015', 'uppercase'],
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

export default Documents;
