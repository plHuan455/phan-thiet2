import React from 'react';
import { useTranslation } from 'react-i18next';

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
}) => {
  const { t } = useTranslation();
  return (
    <DetailTemplate
      hasRelated={!!related?.length}
      titleRelated={t('general.events_related')}
      reactRelated={(
        <FlatList
          data={related}
          render={(item) => <Card.Event {...item} />}
        />
      )}
      textShare={t('general.share')}
      textTopic={t('general.keyword')}
      label={subdivision?.name}
      {...rest}
    />
  );
};

export default Detail;
