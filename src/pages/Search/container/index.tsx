import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from 'react';
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
    value: 'newest',
    label: 'Mới nhất',
  },
  {
    id: '2',
    value: 'oldest',
    label: 'Cũ nhất',
  },
];

const Screen: React.FC<BasePageDataTypes<any>> = ({ pageData, seoData }) => {
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
          url: `/${CONSTANTS.PREFIX.DIVISION.VI}/${item.slug}`,
        },
        url: {
          text: 'Xem thêm',
          iconName: 'arrowRightCopper',
          animation: 'arrow',
        },
      })),
    [newsData?.pages],
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
        // TODO: Add locale later
        href: `/${CONSTANTS.PREFIX.DIVISION.VI}/${item.slug}`,
      })),
    [subdivisionData?.pages],
  );

  // End - Get Subdivision

  const lengthItem = useMemo(
    () => (tabActive === 'tin-tuc' && newsList.length)
      || (tabActive === 'phan-khu' && subdivisionList.length)
      || 0,
    [tabActive, newsList, subdivisionList],
  );

  // TODO: translate later

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
          searchText={{
            text: 'kết quả tìm thấy cho',
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
            placeholder: 'Kết quả mới nhất',
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
            <Text modifiers={['14x20', 'raisinBlack', '400', 'center']}>
              Không có dữ liệu
            </Text>
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
            <Text modifiers={['14x20', 'raisinBlack', '400', 'center']}>
              Không có dữ liệu
            </Text>
          </div>
        )}

      </SearchResult.Wrapper>
    </>
  );
};

export default Screen;
