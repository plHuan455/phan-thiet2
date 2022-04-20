import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Card from 'components/organisms/Card';
import { CardNormalProps } from 'components/organisms/Card/Normal';
import getNewsListService from 'services/news';
import {
  baseString, baseURL, getBlockData, getTimePastToCurrent,
} from 'utils/functions';

interface NewsProps{
  titleSection: string;
  link?: LinkTypes;
}

const News: React.FC<SectionBlocks> = ({ blocks }) => {
  const newsBlock = getBlockData<NewsProps>('general_news', blocks);
  const { data: newsList } = useQuery('getNewsListHome', () => getNewsListService());

  const newsData = useMemo((): CardNormalProps[] => newsList?.data?.map((item) => ({
    thumbnail: baseURL(item.thumbnail),
    title: item.title,
    href: `tin-tuc/${item.slug}`,
    // TODO: API News missing key Tag
    tag: {
      text: 'The Kingdom',
      url: '/',
    },
    // TODO: Update time later
    dateTime: getTimePastToCurrent(item.publishedAt),
    url: {
      // TODO: ADD Translation Later
      text: 'Xem thêm',
      iconName: 'arrowRightCopper',
      animation: 'arrow',
    },
  })) || [], [newsList]);

  return (
    <section className="u-pt-md-80 u-pb-48 u-pt-48 u-pb-md-88 position-relative">
      <Container>
        <FlatMore
          title={{
            text: baseString(newsBlock?.titleSection),
            type: 'h4',
            modifiers: ['gradientGreen', '700', 's015'],
          }}
          link={{
            text: newsBlock?.link?.text,
            href: newsBlock?.link?.url,
            target: newsBlock?.link?.target,
          }}
          data={newsData}
          render={(item) => (
            <Card.Normal
              {...item}
            />
          )}
        />
      </Container>
    </section>
  );
};

export default News;
