import React from 'react';

import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Card from 'components/organisms/Card';

const data = new Array(7).fill({
  thumbnail: 'https://source.unsplash.com/random',
  title: 'Nova World phan thiết và chuỗi cung cấp tiện ích',
  href: '/',
  tag: 'The Kingdom',
  dateTime: '2 giờ trước',
  url: {
    text: 'Xem thêm',
    iconName: 'arrowRightCopper',
    animation: 'arrow',
  },
});

const News: React.FC = () => (
  <section className="u-pt-md-80 u-pb-48 u-pt-48 u-pb-md-88">
    <Container>
      <FlatMore
        title={{
          text: 'TIN TỨC CHUNG',
          type: 'h4',
          modifiers: ['gradientGreen', '700', 's015'],
        }}
        link={{
          text: 'Xem tất cả',
          href: '/',
        }}
        data={data}
        render={(item) => (
          <Card.Normal
            {...item}
          />
        )}
      />
    </Container>
  </section>
);

export default News;
