/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  useCallback,
  useMemo,
  useRef, useState,
} from 'react';
import { useInfiniteQuery } from 'react-query';
import { animated } from 'react-spring';

import useAnimation from '../animation';

import bgLeft from 'assets/images/searchResult/bg_searchResult_left.png';
import bgRight from 'assets/images/searchResult/bg_searchResult_right.png';
import HelmetContainer from 'common/Helmet';
import Image from 'components/atoms/Image';
import { OptionType } from 'components/molecules/PullDown';
import { CardDivisionProps } from 'components/organisms/Card/Division';
import { CardNormalProps } from 'components/organisms/Card/Normal';
import SearchResult from 'components/templates/SearchResult';
import getNewsListService from 'services/news';
import { NewsListTypes } from 'services/news/types';
import getSubDivisionListService from 'services/subdivision';
import { SubDivisionListTypes } from 'services/subdivision/types';
import {
  baseURL,
  getOgDataPage,
} from 'utils/functions';

const dataTabList = [
  {
    slug: 'tin-tuc',
    label: 'Tin tức',
  },
  {
    slug: 'phan-khu',
    label: 'Phân Khu',
  },
];

const optionSort = [
  {
    id: '1',
    value: '1',
    label: 'Mới nhất',
  },
  {
    id: '2',
    value: '2',
    label: 'Cũ nhất',
  },
];

const Screen: React.FC<BasePageDataTypes<any>> = ({
  pageData,
  seoData,
}) => {
  const [tabActive, setTabActive] = useState<string | undefined>(
    dataTabList[0].slug,
  );
  const [currentValueSort, setCurrentValueSort] = useState<OptionType>(optionSort[0]);
  const bgLeftRef = useRef<HTMLDivElement>(null);
  const { animate, animateReverse } = useAnimation({ ref: bgLeftRef });
  const [searchKeyValue, setSearchKeyValue] = useState('');
  const [search, setSearch] = useState('');

  const handleSearch = useCallback(() => {
    setSearch(searchKeyValue);
  }, [searchKeyValue]);

  // Get News
  const {
    data: newsData,
    hasNextPage: hasNextNews,
    isFetching: fetchingNews,
    fetchNextPage: fetchNextNews,
  } = useInfiniteQuery(
    ['getNews', search],
    ({ pageParam = 1 }) => getNewsListService({
      page: pageParam,
      limit: 3,
      keyword: search,
    }),
    {
      getNextPageParam: (params) => (params.meta?.page >= params.meta.totalPages
        ? false
        : params.meta.page + 1),
    },
  );

  const newsMapping = useMemo(
    () => (newsData?.pages || [])
      .reduce((
        prev: NewsListTypes[],
        curr,
      ) => [...prev, ...curr.data], []),
    [newsData?.pages],
  );

  const newsList = useMemo((): CardNormalProps[] => newsMapping.map((item) => ({
    thumbnail: baseURL(item.thumbnail),
    title: item.title,
    href: item.slug,
    dateTime: '2 giờ trước', // publishedAt,
    tag: 'The Kingdom',
    url: {
      text: 'Xem thêm',
      iconName: 'arrowRightCopper',
      animation: 'arrow',
    },
  })), [newsMapping]);
  // End - Get News

  // Get Subdivision
  const {
    data: subdivisionData,
    hasNextPage: hasNextSubdivision,
    isFetching: fetchingSubdivision,
    fetchNextPage: fetchNextSubdivision,
  } = useInfiniteQuery(
    ['getSubdivision', search],
    ({ pageParam = 1 }) => getSubDivisionListService({
      page: pageParam,
      limit: 3,
      keyword: search,
    }),
    {
      getNextPageParam: (params) => (params.meta?.page >= params.meta.totalPages
        ? false
        : params.meta.page + 1),
    },
  );

  const subdivisionMapping = useMemo(
    () => (subdivisionData?.pages || [])
      .reduce((
        prev: SubDivisionListTypes[],
        curr,
      ) => [...prev, ...curr.data], []),
    [subdivisionData?.pages],
  );

  const subdivisionList = useMemo((): CardDivisionProps[] => subdivisionMapping.map((item) => ({
    imgSrc: baseURL(item.thumbnail),
    title: item.name,
    description: '',
    href: item.slug,
  })), [subdivisionMapping]);

  // End - Get Subdivision

  return (
    <>
      <HelmetContainer seoData={seoData} ogData={getOgDataPage(pageData)} />
      <animated.div style={animate}>
        <div className="p-search_bgLeft" ref={bgLeftRef}>
          <Image src={bgLeft} ratio="1x1" size="contain" />
        </div>
      </animated.div>
      <animated.div style={animateReverse}>
        <div className="p-search_bgRight">
          <Image src={bgRight} ratio="1x1" />
        </div>
      </animated.div>

      <SearchResult.Wrapper titleMain="Tìm kiếm">
        <SearchResult.Summary
          value={searchKeyValue}
          placeholder="Tìm kiếm"
          searchText={search}
          length={(tabActive === 'tin-tuc' && newsList.length) || (tabActive === 'phan-khu' && subdivisionList.length) || 0}
          onChange={(e) => setSearchKeyValue(e.currentTarget.value)}
          handleSubmit={handleSearch}
        />
        <SearchResult.Filter
          tabs={dataTabList}
          slugActive={tabActive}
          optionSort={optionSort}
          handleSelectTab={(tab) => setTabActive(tab)}
          handleSort={(option) => option && setCurrentValueSort(option)}
          valueSort={currentValueSort}
        />
        {tabActive === 'tin-tuc' && (
          <SearchResult.Content
            news={newsList}
            hashShowMore={hasNextNews}
            loading={fetchingNews}
            handleShowMore={fetchNextNews}
          />
        )}
        {tabActive === 'phan-khu' && (
          <SearchResult.Content
            divisions={subdivisionList}
            hashShowMore={hasNextSubdivision}
            loading={fetchingSubdivision}
            handleShowMore={fetchNextSubdivision}
          />
        )}
      </SearchResult.Wrapper>
    </>
  );
};

export default Screen;
