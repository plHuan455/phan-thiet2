import React, { useMemo } from 'react';

import BannerTemplate from 'components/templates/Banner';
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

  return (
    <div className="s-banner">
      <BannerTemplate
        image={bannerData.image}
        isLayer
        search={{
          placeholder: newsSearchData?.placeholder,
          // eslint-disable-next-line no-console
          onSearch: (search) => console.log('search', search),
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
