import React from 'react';

import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Card from 'components/organisms/Card';
import { CardNormalProps } from 'components/organisms/Card/Normal';

const dataDummy: CardNormalProps[] = [
  {
    thumbnail: 'https://source.unsplash.com/random',
    title: 'Nova World phan thiết và chuỗi cung cấp tiện ích',
    href: '/',
    tag: 'The Kingdom',
    dateTime: '2 giờ trước',
    url: {
      text: 'Tải xuống',
      iconName: 'downloadOrange',
      animation: 'download',
    },
  },
  {
    thumbnail: 'https://source.unsplash.com/random',
    title: 'Nova World phan thiết và chuỗi cung cấp tiện ích',
    href: '/',
    tag: 'The Kingdom',
    dateTime: '2 giờ trước',
    url: {
      text: 'Tải xuống',
      iconName: 'downloadOrange',
      animation: 'download',
    },
  },
  {
    thumbnail: 'https://source.unsplash.com/random',
    title: 'Nova World phan thiết và chuỗi cung cấp tiện ích',
    href: '/',
    tag: 'The Kingdom',
    dateTime: '2 giờ trước',
    url: {
      text: 'Tải xuống',
      iconName: 'downloadOrange',
      animation: 'download',
    },
  },
  {
    thumbnail: 'https://source.unsplash.com/random',
    title: 'Nova World phan thiết và chuỗi cung cấp tiện ích',
    href: '/',
    tag: 'The Kingdom',
    dateTime: '2 giờ trước',
    url: {
      text: 'Tải xuống',
      iconName: 'downloadOrange',
      animation: 'download',
    },
  },
];

const Documents: React.FC = () => (
  <div className="s-documents">
    <Container>
      <FlatMore
        title={{
          text: 'Tài liệu khác',
          type: 'h4',
          modifiers: ['gradientGreen', '700', 's015', 'uppercase'],
        }}
        data={dataDummy}
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
