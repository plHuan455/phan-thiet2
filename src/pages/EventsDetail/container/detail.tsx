import React from 'react';

import FlatList from 'common/FlatList';
import Card from 'components/organisms/Card';
import { CardNormalProps } from 'components/organisms/Card/Normal';
import DetailTemplate from 'components/templates/Detail';
import useScript from 'hooks/useScript';

export interface DetailProps {
  title: string;
  content: string;
  dateLeave?: string;
  timeLeave?: string;
  tags?: {
    href: string;
    name: string;
  }[];
  relatedNews?: CardNormalProps[];
  subdivision?: {
    name?: string;
    slug?: string;
  };
}
const Detail: React.FC<DetailProps> = ({
  relatedNews,
  subdivision,
  ...rest
}) => {
  useScript('https://sp.zalo.me/plugins/sdk.js');
  return (
    <DetailTemplate
      hasRelated={!!relatedNews?.length}
      titleRelated="Các Tin tức liên quan"
      reactRelated={(
        <FlatList
          data={relatedNews}
          render={(item) => <Card.Normal {...item} />}
        />
    )}
      textShare="Chia sẻ"
      textTopic="Từ khóa"
      label={subdivision?.name}
      {...rest}
    />
  );
};

export default Detail;
