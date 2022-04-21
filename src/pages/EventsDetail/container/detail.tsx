import React from 'react';

import FlatList from 'common/FlatList';
import Card from 'components/organisms/Card';
import { CardEventProps } from 'components/organisms/Card/Event';
import DetailTemplate from 'components/templates/Detail';

export interface DetailProps {
  title: string;
  content: string;
  dateLeave?: string;
  timeLeave?: string;
  tags?: {
    href: string;
    name: string;
  }[];
  related?: CardEventProps[];
  subdivision?: {
    name?: string;
    slug?: string;
  };
}
const Detail: React.FC<DetailProps> = ({
  related,
  subdivision,
  ...rest
}) => (
  <DetailTemplate
    hasRelated={!!related?.length}
    titleRelated="Các sự kiện liên quan"
    reactRelated={(
      <FlatList
        data={related}
        render={(item) => <Card.Event {...item} />}
      />
    )}
    textShare="Chia sẻ"
    textTopic="Từ khóa"
    label={subdivision?.name}
    {...rest}
  />
);

export default Detail;
