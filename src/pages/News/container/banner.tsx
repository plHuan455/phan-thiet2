import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import BannerTemplate from 'components/templates/Banner';
import useKeywords from 'hooks/useKeywords';
import { baseURL, getBannerData, getBlockData } from 'utils/functions';

interface NewsSearch {
  placeholderSearch?: string;
}

const Banner: React.FC<Pick<BasePageDataTypes<any>, 'banners' | 'blocks'>> = ({ banners, blocks }) => {
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
    if (!keyword) return;
    onSubmit(keyword);
    searchParams.set('keyword', keyword);
    setSearchParams(searchParams);
  };

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
          // TODO: translate later
          keyword: 'Từ khóa nổi bật:',
          list: [
            {
              text: 'Du lịch',
              href: 'du-lich',
            },
            {
              text: 'The King Dom',
              href: 'the-king-dom',
            },
            {
              text: 'Tour trọn gói',
              href: 'tour-tron-goi',
            },
          ],
        }}
      />
    </div>
  );
};

export default Banner;
