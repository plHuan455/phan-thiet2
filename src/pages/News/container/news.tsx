import React from 'react';

import NewsList from 'components/templates/NewsList';

const dataNews = new Array(3).fill({
  thumbnail: 'https://source.unsplash.com/random',
  dateTime: '1 phút trước',
  tag: 'The Kingdom',
  button: {
    text: 'Xem thêm',
    url: '/',
  },
  title: 'Nova World phan thiết và chuỗi cung cấp tiện ích chăm sóc sức khỏe',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat egestas eu egestas sed viverra urna. Purus accumsan feugiat feugiat nisl pulvinar faucibus eu. ',
});

const News: React.FC = () => (
  <>
    <NewsList
      title="TIN TỨC"
      listNews={dataNews}
      button={{
        text: 'Xem thêm',
      }}
    />
  </>
);
export default News;
