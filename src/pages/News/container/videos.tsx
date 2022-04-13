import React from 'react';

import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Card from 'components/organisms/Card';
import { CardPlayerProps } from 'components/organisms/Card/Player';

interface NewsPlayerProps {
  dataList: CardPlayerProps[]
}

const Videos: React.FC<NewsPlayerProps> = ({ dataList }) => (
  <div className="s-videos">
    <Container>
      <FlatMore
        title={{
          text: 'VIDEO',
          type: 'h4',
          modifiers: ['gradientGreen', '700', 's015', 'uppercase'],
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

export default Videos;
