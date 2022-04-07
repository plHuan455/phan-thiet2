import React from 'react';

import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Card from 'components/organisms/Card';
import { CardPlayerProps } from 'components/organisms/Card/Player';

interface NewsPlayerProps {
  dataList: CardPlayerProps[]
}

const NewsPlayer: React.FC<NewsPlayerProps> = ({ dataList }) => (
  <div className="s-newsPlayer">
    <Container>
      <FlatMore
        title={{
          text: 'VIDEO',
          type: 'h4',
          modifiers: ['gradientGreen', '700', 's015'],
        }}
        link={{
          text: 'Xem tất cả',
          href: '/',
        }}
        data={dataList}
        render={(item) => (
          <Card.Player
            {...item}
          />
        )}
      />
    </Container>
  </div>
);

export default NewsPlayer;
