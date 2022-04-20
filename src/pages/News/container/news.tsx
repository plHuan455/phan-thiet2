import React, { useRef, useMemo } from 'react';

import useAnimation from '../hook/animation';

import ballon1 from 'assets/images/pages/news/ballon_1.png';
import leaf1 from 'assets/images/pages/news/leaf_1.png';
import leaf2 from 'assets/images/pages/news/leaf_2.png';
import Image from 'components/atoms/Image';
import NewsList from 'components/templates/NewsList';
import useScrollAnimate from 'hooks/useScrollAnimation';
import { OverviewNewsType } from 'services/overviews/types';
import CONSTANTS from 'utils/constants';
import { baseURL, getBlockData, getTimePastToCurrent } from 'utils/functions';

interface NewsBlocks {
  title: string;
  button: string;
}

interface NewsProps extends SectionBlocks {
  news?: OverviewNewsType[];
}

const News: React.FC<NewsProps> = ({ news, blocks }) => {
  const newsBlocks = getBlockData<NewsBlocks>('news', blocks);
  const leaf1Ref = useRef<HTMLDivElement>(null);
  const leaf2Ref = useRef<HTMLDivElement>(null);
  const ballonRef = useRef<HTMLDivElement>(null);
  const isScrollLeaf1 = useScrollAnimate(leaf1Ref);
  const isScrollLeaf2 = useScrollAnimate(leaf2Ref);
  const isScrollBallon = useScrollAnimate(ballonRef);
  const {
    animated, ballonAnimate, slideAnimate, slideReverseAnimate,
  } = useAnimation();

  const dataNews = useMemo(() => {
    if (Array.isArray(news)) {
      return news.map((item) => ({
        thumbnail: baseURL(item.thumbnail),
        dateTime: getTimePastToCurrent(item.publishedAt),
        tag: item?.subdivision ? {
          text: item?.subdivision?.name,
          // TODO: Update locale later
          url: `/${CONSTANTS.PREFIX.DIVISION.VI}/${item?.subdivision?.slug}`,
        } : undefined,
        button: {
          text: newsBlocks?.button,
          // TODO: Update locale later
          url: `/${CONSTANTS.PREFIX.NEWS.VI}/${item.slug}`,
        },
        title: item.title,
        description: item.description,
      }));
    }
    return [];
  }, [news, newsBlocks]);

  return (
    <div className="s-news">
      <animated.div style={isScrollBallon ? ballonAnimate : {}} className="s-news_ballon" ref={ballonRef}>
        <Image src={ballon1} alt="ballon" ratio="359x247" />
      </animated.div>
      <animated.div className="s-news_leaf1" style={isScrollLeaf1 ? slideReverseAnimate : {}} ref={leaf1Ref}>
        <Image src={leaf1} alt="leaf1" ratio="113x182" />
      </animated.div>
      <animated.div className="s-news_leaf2" style={isScrollLeaf2 ? slideAnimate : {}} ref={leaf2Ref}>
        <Image src={leaf2} alt="leaf2" ratio="548x612" />
      </animated.div>
      <NewsList
        title={newsBlocks?.title}
        listNews={dataNews}
      />
    </div>
  );
};

News.defaultProps = {
  news: [],
};

export default News;
