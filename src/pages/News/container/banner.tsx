import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
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
  const { t } = useTranslation();
  const { language } = i18n;
  const [searchParams, setSearchParams] = useSearchParams();
  const keywordParams = useMemo(() => searchParams.get('keyword') || '', [
    searchParams,
  ]);
  const { slug } = useParams<{slug:string}>();
  const [searchValue, setSearchValue] = useState<string | undefined>(keywordParams);
  const {
    data: dataTag,
  } = useQuery(
    ['getAllHashtagListInOverview', language],
    () => getAllHashtagListService({ in_overview: 1 }),
  );

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

  const { options, onSubmit, isLoading } = useKeywords(searchValue, 1);

  useEffect(() => {
    setSearchValue(keywordParams);
  }, [keywordParams]);

  const onSearch = useCallback((keyword: string | undefined) => {
    if (keyword) {
      onSubmit(keyword);
      searchParams.set('keyword', keyword);
      setSearchParams(searchParams);
    } else {
      searchParams.delete('keyword');
      setSearchParams(searchParams);
    }
  }, [onSubmit, searchParams, setSearchParams]);

  const onChangSearch = useCallback((keyword: string| undefined) => {
    setSearchValue(keyword);
  }, []);

  const listTag = useMemo(() => dataTag?.map(((x) => ({
    text: x.name,
    href: `${FUNCTIONS_LANGUAGE.languageURL(language)}${slug}?keyword=${x.name}`,
  }))) || [], [dataTag, slug, language]);

  return (
    <div className="s-banner">
      <BannerTemplate
        image={bannerData.image}
        isLayer
        search={{
          list: options,
          placeholder: newsSearchData?.placeholder,
          value: searchValue,
          loading: isLoading,
          onSearch,
          onChange: onChangSearch,
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
