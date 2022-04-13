import React from 'react';

import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Card from 'components/organisms/Card';

const dataCardPlayers = [
  {
    thumbnail: 'https://source.unsplash.com/random',
    tag: 'The Kingdom',
    title: 'OCEAN RESIDENCE - MẢNH GHÉP ĐẶC SẮC MỚI TẠI NOVAWORLD PHAN THIET',
    dateTime: '2 giờ trước',
  },
  {
    thumbnail: 'https://source.unsplash.com/random',
    tag: 'The Kingdom',
    title: 'OCEAN RESIDENCE - MẢNH GHÉP ĐẶC SẮC MỚI TẠI NOVAWORLD PHAN THIET',
    dateTime: '2 giờ trước',
  },
  {
    thumbnail: 'https://source.unsplash.com/random',
    tag: 'The Kingdom',
    title: 'OCEAN RESIDENCE - MẢNH GHÉP ĐẶC SẮC MỚI TẠI NOVAWORLD PHAN THIET',
    dateTime: '2 giờ trước',
  },
  {
    thumbnail: 'https://source.unsplash.com/random',
    tag: 'The Kingdom',
    title: 'OCEAN RESIDENCE - MẢNH GHÉP ĐẶC SẮC MỚI TẠI NOVAWORLD PHAN THIET',
    dateTime: '2 giờ trước',
  },
];

const Videos: React.FC = () => (
  <div className="s-videos">
    <Container>
      <FlatMore
        title={{
          text: 'VIDEO',
          type: 'h4',
          modifiers: ['gradientGreen', '700', 's015', 'uppercase'],
        }}
        data={dataCardPlayers}
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
