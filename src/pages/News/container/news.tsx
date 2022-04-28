import React, {
  useRef, useMemo, useState, useCallback, useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';

import useAnimation from '../hook/animation';

import Section from './section';

import ballon1 from 'assets/images/pages/news/ballon_1.png';
import leaf1 from 'assets/images/pages/news/leaf_1.png';
import leaf2 from 'assets/images/pages/news/leaf_2.png';
import Button from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import { CardNewsProps } from 'components/organisms/Card/News';
import NewsList from 'components/templates/NewsList';
import { useAsync } from 'hooks/useAsync';
import useScrollAnimate from 'hooks/useScrollAnimation';
import i18n from 'i18n';
import { getOverviewListService } from 'services/overviews';
import { OverviewNewsType, PaginationOverview } from 'services/overviews/types';
import CONSTANTS from 'utils/constants';
import {
  baseURL, getBlockData, getTimePastToCurrent, redirectURL,
} from 'utils/functions';

interface NewsBlocks {
  title: string;
  button: string;
}

interface NewsProps extends SectionBlocks {
  news?: PaginationOverview<OverviewNewsType>;
  keyword?: string;
}

export const AnimationNews = React.memo(() => {
  const leaf1Ref = useRef<HTMLDivElement>(null);
  const leaf2Ref = useRef<HTMLDivElement>(null);
  const ballonRef = useRef<HTMLDivElement>(null);
  const isScrollLeaf1 = useScrollAnimate(leaf1Ref);
  const isScrollLeaf2 = useScrollAnimate(leaf2Ref);
  const isScrollBallon = useScrollAnimate(ballonRef);
  const {
    animated,
    ballonAnimate,
    slideAnimate,
    slideReverseAnimate,
  } = useAnimation();
  return (
    <>
      <animated.div
        style={isScrollBallon ? ballonAnimate : {}}
        className="s-news_ballon"
        ref={ballonRef}
      >
        <Image src={ballon1} alt="ballon" ratio="359x247" />
      </animated.div>
      <animated.div
        className="s-news_leaf1"
        style={isScrollLeaf1 ? slideReverseAnimate : {}}
        ref={leaf1Ref}
      >
        <Image src={leaf1} alt="leaf1" ratio="113x182" />
      </animated.div>
      <animated.div
        className="s-news_leaf2"
        style={isScrollLeaf2 ? slideAnimate : {}}
        ref={leaf2Ref}
      >
        <Image src={leaf2} alt="leaf2" ratio="548x612" />
      </animated.div>
    </>
  );
});

type Meta = {
  page: number;
  lastPage: number;
}

const News: React.FC<NewsProps> = ({ news, blocks, keyword }) => {
  const { t } = useTranslation();
  const newsBlocks = getBlockData<NewsBlocks>('news', blocks);
  const { language } = i18n;

  const [meta, setMeta] = useState<Meta>({ page: 1, lastPage: 1 });
  const [dataLoadMore, setDataLoadMore] = useState<CardNewsProps[]>([]);

  const formatData = useCallback((item:OverviewNewsType):CardNewsProps => ({
    thumbnail: baseURL(item.thumbnail),
    dateTime: getTimePastToCurrent(item.publishedAt),
    tag: item?.subdivision ? {
      text: item?.subdivision?.name,
      url: redirectURL(CONSTANTS.PREFIX.DIVISION, item?.subdivision?.slug, language),
    } : undefined,
    button: {
      text: newsBlocks?.button,
      url: redirectURL(CONSTANTS.PREFIX.NEWS, item.slug, language),
    },
    title: item.title,
    description: item.description,
  }), [language, newsBlocks?.button]);

  const [newsExecute, newsState] = useAsync(getOverviewListService, {
    onSuccess: (res) => {
      const result = res.news.data.map(formatData);
      setMeta((prev) => ({ ...prev, page: res.news.currentPage }));
      setDataLoadMore(
        (prev) => ([...(prev || []), ...result]),
      );
    },
  });

  const dataInitial = useMemo(
    () => news?.data.map(formatData) || [],
    [formatData, news?.data],
  );

  const dataNews = useMemo(() => [...dataInitial, ...dataLoadMore], [dataInitial, dataLoadMore]);

  useEffect(() => {
    setDataLoadMore([]);
    if (news) {
      setMeta({
        page: news.currentPage,
        lastPage: news.lastPage,
      });
    }
  }, [keyword, news]);

  if (!news?.total) return null;

  return (
    <Section>
      <div className="s-news">
        <NewsList title={newsBlocks?.title} listNews={dataNews} />
        {newsState.loading && (
          <div className="d-flex justify-content-center u-mt-24 u-mb-24">
            <Icon iconName="loadingInherit" />
          </div>
        )}
        {meta.page < meta.lastPage && (
          <div className="p-news_seeMore">
            <Button
              variant="primary-green"
              size="lg"
              onClick={() => newsExecute({
                limit: 6,
                page: meta.page + 1,
                keyword,
                type: 'news',
              })}
              disabled={newsState.loading}
            >
              {t('button.more')}
            </Button>
          </div>
        )}
        {!!news?.data.length && <AnimationNews />}
      </div>
    </Section>
  );
};

News.defaultProps = {
  news: undefined,
  keyword: undefined,
};

export default React.memo(News);
