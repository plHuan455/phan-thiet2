import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Animate from 'components/organisms/Animate';
import Card from 'components/organisms/Card';
import { CardNormalProps } from 'components/organisms/Card/Normal';
import i18n from 'i18n';
import { getNewsListService } from 'services/news';
import CONSTANTS from 'utils/constants';
import {
  baseString, baseURL, getBlockData, getTimePastToCurrent, redirectURL,
} from 'utils/functions';

interface NewsProps{
  titleSection: string;
  link?: LinkTypes;
}

const News: React.FC<SectionBlocks> = ({ blocks }) => {
  const { t } = useTranslation();
  const { language } = i18n;
  const newsBlock = getBlockData<NewsProps>('general_news', blocks);
  const { data: newsList } = useQuery('getNewsListHome', () => getNewsListService());

  const newsData = useMemo((): CardNormalProps[] => newsList?.data?.map((item) => ({
    thumbnail: baseURL(item.thumbnail),
    title: item.title,
    href: redirectURL(CONSTANTS.PREFIX.NEWS, item.slug, language),
    tag: {
      text: item.subdivision.name,
      url: redirectURL(CONSTANTS.PREFIX.DIVISION, item.subdivision.slug, language),
    },
    // TODO: Update time later
    dateTime: getTimePastToCurrent(item.publishedAt),
    url: {
      // TODO: ADD Translation Later
      text: t('button.more'),
      iconName: 'arrowRightCopper',
      animation: 'arrow',
    },
  })) || [], [newsList, language, t]);

  return (
    <Animate type="fadeInUp">
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
    </Animate>
  );
};

export default News;
