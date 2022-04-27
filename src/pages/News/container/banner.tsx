import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { useParams, useSearchParams } from 'react-router-dom';

import BannerTemplate from 'components/templates/Banner';
import useKeywords from 'hooks/useKeywords';
import i18n from 'i18n';
import FUNCTIONS_LANGUAGE from 'i18n/functions';
import { getAllHashtagListService } from 'services/hashtag';
import { baseURL, getBannerData, getBlockData } from 'utils/functions';

interface NewsSearch {
  placeholderSearch?: string;
}

const Banner: React.FC<Pick<BasePageDataTypes<any>, 'banners' | 'blocks'>> = ({ banners, blocks }) => {
  const { language } = i18n;
  const { slug } = useParams<{slug:string}>();
  const {
    data: dataTag,
  } = useQuery(
    ['getAllHashtagListInOverview', language],
    () => getAllHashtagListService({ in_overview: 1 }),
  );

  const { t } = useTranslation();
  const bannerData = useMemo(() => {
    const banner = getBannerData('basic', banners);
    return ({
      image: {
        src: baseURL(banner?.imageDesktop),
        srcTablet: baseURL(banner?.imageTablet),
        srcMobile: baseURL(banner?.imageMobile),
        alt: banner?.title,
      },
    });
  }, [banners]);

  const newsSearchData = useMemo(() => {
    const newsSearch = getBlockData<NewsSearch>('news_search', blocks);
    return ({
      placeholder: newsSearch?.placeholderSearch,
    });
  }, [blocks]);

  const {
    options, hasNextPage, fetchNextPage, onSubmit,
  } = useKeywords();
  const [searchParams, setSearchParams] = useSearchParams();
  const keywordParams = useMemo(() => searchParams.get('keyword') || '', [
    searchParams,
  ]);

  const onSearch = (keyword: string | undefined) => {
    if (keyword) {
      onSubmit(keyword);
      searchParams.set('keyword', keyword);
      setSearchParams(searchParams);
    } else {
      searchParams.delete('keyword');
      setSearchParams(searchParams);
    }
  };

  const listTag = useMemo(() => dataTag?.map(((x) => ({
    text: x.name,
    href: `${FUNCTIONS_LANGUAGE.languageURL(language)}${slug}?keyword=${x.name}`,
  }))) || [], [dataTag, slug, language]);

  return (
    <div className="s-banner">
      <BannerTemplate
        image={bannerData.image}
        isLayer
        onLoadMore={() => hasNextPage && fetchNextPage()}
        isSuggest={!!options?.length}
        optionSuggest={options}
        search={{
          placeholder: newsSearchData?.placeholder,
          value: keywordParams,
          onSearch,
        }}
        tag={{
          keyword: t('general.featured_keywords'),
          list: listTag,
        }}
      />
    </div>
  );
};

export default Banner;
