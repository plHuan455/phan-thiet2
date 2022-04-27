import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import BannerTemplate from 'components/templates/Banner';
import useKeywords from 'hooks/useKeywords';
import i18n from 'i18n';
import FUNCTIONS_LANGUAGE from 'i18n/functions';
import { useAppSelector } from 'store/hooks';
import CONSTANTS from 'utils/constants';

interface BannerProps {
  thumbnail?: string
}

const Banner: React.FC<BannerProps> = ({
  thumbnail,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { language } = i18n;
  const staticAll = useAppSelector((state) => state.static.static);

  const slugPageNews = useMemo(() => staticAll?.find(
    (e) => e.templateCode === CONSTANTS.TEMPLATE_CODE.NEW_IMAGE,
  )?.slug, [staticAll]);

  const {
    options, hasNextPage, fetchNextPage, onSubmit,
  } = useKeywords();

  const onSearch = (keyword: string | undefined) => {
    if (!keyword) return;
    onSubmit(keyword);
    navigate(`${FUNCTIONS_LANGUAGE.languageURL(language)}${slugPageNews}?keyword=${keyword}`);
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
