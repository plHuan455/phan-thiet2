import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import BannerTemplate from 'components/templates/Banner';
import useKeywords from 'hooks/useKeywords';
import { baseURL } from 'utils/functions';

export interface BannerProps {
  thumbnail?: string
}

const Banner: React.FC<BannerProps> = ({ thumbnail }) => {
  const navigate = useNavigate();

  const blockBanner = useMemo(() => baseURL(thumbnail), [thumbnail]);

  const {
    options, hasNextPage, fetchNextPage, onSubmit,
  } = useKeywords();

  const onSearch = (keyword: string | undefined) => {
    if (!keyword) return;
    onSubmit(keyword);
    // TODO: get slug from static all later
    navigate(`/tong-quan-tin-tuc-va-hinh-anh?keyword=${keyword}`);
  };

  return (
    <>
      <BannerTemplate
        image={{ src: blockBanner }}
        isLayer
        onLoadMore={() => hasNextPage && fetchNextPage()}
        optionSuggest={options}
        isSuggest={!!options?.length}
        search={{
          // TODO: Add Translations Later
          placeholder: 'Tìm kiếm tin tức',
          onSearch,
        }}
        tag={{
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
    </>
  );
};

export default Banner;
