import React from 'react';
import { useNavigate } from 'react-router-dom';

import BannerTemplate from 'components/templates/Banner';
import useKeywords from 'hooks/useKeywords';

interface BannerProps {
  thumbnail?: string
}

const Banner: React.FC<BannerProps> = ({
  thumbnail,
}) => {
  const navigate = useNavigate();
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
        image={{ src: thumbnail }}
        onLoadMore={() => hasNextPage && fetchNextPage()}
        isLayer
        isSuggest={!!options?.length}
        search={{
          // TODO: Add Translations Later
          placeholder: 'Tìm kiếm sự kiện',
          onSearch,
        }}
        optionSuggest={options}
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

Banner.defaultProps = {
  thumbnail: '',
};

export default Banner;
