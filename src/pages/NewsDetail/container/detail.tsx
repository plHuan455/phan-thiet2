import React from 'react';

import FlatList from 'common/FlatList';
import Card from 'components/organisms/Card';
import DetailTemplate from 'components/templates/Detail';
import useScript from 'hooks/useScript';

const newsDetailData = new Array(5).fill({
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

export interface DetailProps {
  title: string,
  content: string,
  dateLeave?: string
  timeLeave?: string,
  tags?: {
    href: string,
    name: string
  }[]
}
const Detail: React.FC<DetailProps> = (props) => {
  useScript('https://sp.zalo.me/plugins/sdk.js');
  return (
    <DetailTemplate
      hasRelated={!!newsDetailData?.length}
      titleRelated="Các Tin tức liên quan"
      reactRelated={(
        <FlatList
          data={newsDetailData}
          render={(item) => (
            <Card.Normal
              {...item}
            />
          )}
        />
          )}
      textShare="Chia sẻ"
      textTopic="Từ khóa"
      label="The Kingdom"
      {...props}
    />
  );
};

export default Detail;
