import React from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
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
          placeholder: t('form.search_event'),
          onSearch,
        }}
        optionSuggest={options}
        tag={{
          keyword: t('banner.featured_keywords'),
          list: [
            {
              text: t('banner.travel'),
              href: 'du-lich',
            },
            {
              text: 'The King Dom',
              href: 'the-king-dom',
            },
            {
              text: t('banner.package_tour'),
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
