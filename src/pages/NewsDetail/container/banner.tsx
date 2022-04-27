import React, { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import BannerTemplate from 'components/templates/Banner';
import useKeywords from 'hooks/useKeywords';
import i18n from 'i18n';
import FUNCTIONS_LANGUAGE from 'i18n/functions';
import { getAllHashtagListService } from 'services/hashtag';
import { useAppSelector } from 'store/hooks';
import CONSTANTS from 'utils/constants';
import { baseURL } from 'utils/functions';

export interface BannerProps {
  thumbnail?: string
}

const Banner: React.FC<BannerProps> = ({ thumbnail }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { language } = i18n;
  const staticAll = useAppSelector((state) => state.static.static);
  const slugPageNews = useMemo(() => staticAll?.find(
    (e) => e.templateCode === CONSTANTS.TEMPLATE_CODE.NEW_IMAGE,
  )?.slug, [staticAll]);
  const [searchValue, setSearchValue] = useState<string | undefined>();

  const blockBanner = useMemo(() => baseURL(thumbnail), [thumbnail]);

  const {
    data: dataTag,
  } = useQuery(
    ['getAllHashtagListInOverview', language],
    () => getAllHashtagListService({ in_overview: 1 }),
  );

  const {
    options, onSubmit, isLoading,
  } = useKeywords(searchValue, 1);

  const onSearch = (keyword: string | undefined) => {
    if (!keyword) return;
    onSubmit(keyword);
    navigate(`${FUNCTIONS_LANGUAGE.languageURL(language)}${slugPageNews}?keyword=${keyword}`);
  };

  const onChangSearch = useCallback((keyword: string| undefined) => {
    setSearchValue(keyword);
  }, []);

  const listTag = useMemo(() => dataTag?.map(((x) => ({
    text: x.name,
    href: `${FUNCTIONS_LANGUAGE.languageURL(language)}${slugPageNews}?keyword=${x.name}`,
  }))) || [], [dataTag, language, slugPageNews]);

  return (
    <>
      <BannerTemplate
        image={{ src: blockBanner }}
        isLayer
        search={{
          list: options,
          loading: isLoading,
          placeholder: t('form.search_news'),
          onSearch,
          onChange: onChangSearch,
        }}
        tag={{
          keyword: t('general.featured_keywords'),
          list: listTag,
        }}
      />
    </>
  );
};

export default React.memo(Banner);
