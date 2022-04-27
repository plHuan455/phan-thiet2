import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useInfiniteQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { animated } from 'react-spring';

import useAnimation from '../animation';

import bgLeft from 'assets/images/searchResult/bg_searchResult_left.png';
import bgRight from 'assets/images/searchResult/bg_searchResult_right.png';
import HelmetContainer from 'common/Helmet';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import { OptionType } from 'components/molecules/PullDown';
import { CardDivisionProps } from 'components/organisms/Card/Division';
import { CardNormalProps } from 'components/organisms/Card/Normal';
import SearchResult from 'components/templates/SearchResult';
import i18n from 'i18n';
import { getNewsListService } from 'services/news';
import { NewsListTypes } from 'services/news/types';
import { getSubDivisionListService } from 'services/subdivision';
import { SubDivisionListTypes } from 'services/subdivision/types';
import CONSTANTS from 'utils/constants';
import {
  baseString,
  baseURL,
  getOgDataPage,
  getTimePastToCurrent,
  redirectURL,
} from 'utils/functions';

const Screen: React.FC<BasePageDataTypes<any>> = ({ pageData, seoData }) => {
  const { t } = useTranslation();
  const { language } = i18n;

  const dataTabList = [
    {
      slug: 'tin-tuc',
      label: t('general.news'),
    },
    {
      slug: 'phan-khu',
      label: t('general.division'),
    },
  ];

  const optionSort = useMemo(() => [
    {
      id: '1',
      value: 'newest',
      label: t('general.latest'),
    },
    {
      id: '2',
      value: 'oldest',
      label: t('general.oldest'),
    },
  ], [t]);

  const [tabActive, setTabActive] = useState<string | undefined>(
    dataTabList[0].slug,
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentValueSort, setCurrentValueSort] = useState<OptionType>(
    optionSort[0],
  );
  const bgLeftRef = useRef<HTMLDivElement>(null);
  const { animate, animateReverse } = useAnimation({ ref: bgLeftRef });
  const [searchKeyValue, setSearchKeyValue] = useState('');
  const [search, setSearch] = useState('');

  const keywordParams = useMemo(() => searchParams.get('keyword') || '', [
    searchParams,
  ]);
  const sortParams = useMemo(
    () => searchParams.get('sort') || optionSort[0].value,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchParams],
  );

  const handleSearch = useCallback(() => {
    if (searchKeyValue) {
      searchParams.set('keyword', searchKeyValue);
      setSearchParams(searchParams);
    } else {
      searchParams.delete('keyword');
      setSearchParams(searchParams);
    }
  }, [searchKeyValue, searchParams, setSearchParams]);

  const handleSort = useCallback(
    (option?: OptionType) => {
      if (option) {
        searchParams.set('sort', option.value.toString());
        setSearchParams(searchParams);
      }
    },
    [searchParams, setSearchParams],
  );

  useEffect(() => {
    if (keywordParams) {
      setSearchKeyValue(keywordParams);
      setSearch(keywordParams);
    }
  }, [keywordParams]);

  useEffect(() => {
    const sortItem = optionSort?.find((item) => item.value === sortParams);
    if (sortItem) {
      setCurrentValueSort(sortItem);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortParams]);

  // Get News
  const {
    data: newsData,
    hasNextPage: hasNextNews,
    isFetching: fetchingNews,
    fetchNextPage: fetchNextNews,
  } = useInfiniteQuery(
    ['getNews', [keywordParams, sortParams]],
    ({ pageParam = 1 }) => getNewsListService({
      page: pageParam,
      limit: 3,
      keyword: keywordParams,
      sort: sortParams,
    }),
    {
      getNextPageParam: (params) => (params.meta?.page >= params.meta.totalPages
        ? false
        : params.meta.page + 1),
    },
  );

  const newsList = useMemo(
    (): CardNormalProps[] => (newsData?.pages || [])
      .reduce((prev: NewsListTypes[], curr) => [...prev, ...curr.data], [])
      ?.map((item) => ({
        thumbnail: baseURL(item.thumbnail),
        title: item.title,
        href: item.slug,
        dateTime: getTimePastToCurrent(item.publishedAt),
        tag: {
          text: item.subdivision?.name,
          url: redirectURL(CONSTANTS.PREFIX.DIVISION, item.slug, language),
        },
        url: {
          text: t('button.more'),
          iconName: 'arrowRightCopper',
          animation: 'arrow',
        },
      })),
    [newsData?.pages, language, t],
  );
  // End - Get News

  // Get Subdivision
  const {
    data: subdivisionData,
    hasNextPage: hasNextSubdivision,
    isFetching: fetchingSubdivision,
    fetchNextPage: fetchNextSubdivision,
  } = useInfiniteQuery(
    ['getSubdivision', [keywordParams, sortParams]],
    ({ pageParam = 1 }) => getSubDivisionListService({
      page: pageParam,
      limit: 3,
      keyword: keywordParams,
      sort: sortParams,
    }),
    {
      getNextPageParam: (params) => (params.meta?.page >= params.meta.totalPages
        ? false
        : params.meta.page + 1),
    },
  );

  const subdivisionList = useMemo(
    (): CardDivisionProps[] => (subdivisionData?.pages || [])
      .reduce(
        (prev: SubDivisionListTypes, curr) => [...prev, ...curr.data],
        [],
      )
      ?.map((item) => ({
        imgSrc: baseURL(item.thumbnail),
        title: item.name,
        description: baseString(item.description),
        href: redirectURL(CONSTANTS.PREFIX.DIVISION, item.slug, language),
      })),
    [subdivisionData?.pages, language],
  );

  // End - Get Subdivision

  const lengthItem = useMemo(
    () => (tabActive === 'tin-tuc' && newsList.length)
      || (tabActive === 'phan-khu' && subdivisionList.length)
      || 0,
    [tabActive, newsList, subdivisionList],
  );

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

      <SearchResult.Wrapper titleMain={pageData.title}>
        <SearchResult.Summary
          value={searchKeyValue}
          placeholder={t('general.search_placeholder')}
          searchText={{
            text: t('general.search_result'),
            length: lengthItem,
            value: search,
          }}
          onChange={(e) => setSearchKeyValue(e.currentTarget.value)}
          handleSubmit={handleSearch}
        />
        <SearchResult.Filter
          tab={{
            list: dataTabList,
            active: tabActive,
            onSelect: (tab) => setTabActive(tab),
          }}
          filter={{
            options: optionSort,
            value: currentValueSort,
            onFilter: handleSort,
          }}
        />
        {tabActive === 'tin-tuc' && (
          <SearchResult.Content
            news={newsList}
            hashShowMore={hasNextNews}
            loading={fetchingNews}
            handleShowMore={fetchNextNews}
          />
        )}
        {tabActive === 'tin-tuc' && !newsList?.length && (
          <div className="u-mt-24">
            <Text modifiers={['14x20', 'raisinBlack', '400', 'center']} content={t('general.not_found_data')} />
          </div>
        )}
        {tabActive === 'phan-khu' && (
          <SearchResult.Content
            divisions={subdivisionList}
            hashShowMore={hasNextSubdivision}
            loading={fetchingSubdivision}
            handleShowMore={fetchNextSubdivision}
          />
        )}
        {tabActive === 'phan-khu' && !subdivisionList?.length && (
          <div className="u-mt-24">
            <Text modifiers={['14x20', 'raisinBlack', '400', 'center']} content={t('general.not_found_data')} />
          </div>
        )}

      </SearchResult.Wrapper>
    </>
  );
};

export default Screen;
