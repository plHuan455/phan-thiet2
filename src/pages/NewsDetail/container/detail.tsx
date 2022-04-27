import React from 'react';
import { useTranslation } from 'react-i18next';

import FlatList from 'common/FlatList';
import Card from 'components/organisms/Card';
import { CardNormalProps } from 'components/organisms/Card/Normal';
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
  const { t } = useTranslation();
  return (
    <DetailTemplate
      hasRelated={!!relatedNews?.length}
      titleRelated={t('general.news_related')}
      reactRelated={(
        <FlatList
          data={relatedNews}
          render={(item) => <Card.Normal {...item} />}
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
