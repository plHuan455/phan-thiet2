import dayjs from 'dayjs';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import Banner from './banner';
import Detail, { DetailProps } from './detail';

import HelmetContainer from 'common/Helmet';
import LoadingPage from 'common/Navigation/loading';
import RedirectNav from 'common/Navigation/redirect';
import useDetail from 'hooks/useDetail';
import i18n from 'i18n';
import FUNCTIONS_LANGUAGE from 'i18n/functions';
import { getNewsDetailService } from 'services/news';
import { useAppSelector } from 'store/hooks';
import CONSTANTS from 'utils/constants';
import {
  baseString, baseURL, getTimePastToCurrent, redirectURL,
} from 'utils/functions';

const Screen: React.FC = () => {
  const staticAll = useAppSelector((state) => state.static.static);

  const slugPage = staticAll?.find(
    (e) => e.templateCode === CONSTANTS.TEMPLATE_CODE.NEW_IMAGE,
  )?.slug;

  const {
    data,
    loading,
    error,
  } = useDetail({ service: getNewsDetailService });
  const { language } = i18n;
  const { t } = useTranslation();

  const newsDetailData = useMemo(() : DetailProps => ({
    content: baseString(data?.content),
    title: baseString(data?.title),
    timeLeave: getTimePastToCurrent(data?.publishedAt, true),
    dateLeave: dayjs(data?.publishedAt).format('DD/MM/YYYY'),
    tags: data?.tags.map((item) => ({
      href: `${FUNCTIONS_LANGUAGE.languageURL(language)}${slugPage}?keyword=${item.name}`,
      name: item?.name,
    })) || [],
    subdivision: {
      name: data?.subdivision?.name,
      slug: redirectURL(CONSTANTS.PREFIX.DIVISION, data?.subdivision?.slug, language),
    },
    relatedNews: data?.relatedNews?.map((item) => ({
      tag: {
        text: baseString(data?.subdivision?.name),
        url: redirectURL(CONSTANTS.PREFIX.DIVISION, data?.subdivision?.slug, language),
      },
      title: baseString(item.title),
      thumbnail: baseURL(item.thumbnail),
      href: redirectURL(CONSTANTS.PREFIX.NEWS, item.slug, language),
      dateTime: getTimePastToCurrent(item?.publishedAt),
      url: {
        text: t('button.more'),
        iconName: 'arrowRightCopper',
        animation: 'arrow',
      },
    })),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [data, slugPage, language]);

  if (loading) return <LoadingPage />;

  if (error) return <RedirectNav />;

  return (
    <>
      <HelmetContainer seoData={data?.seoData} ogData={data?.openGraph} />
      <Banner thumbnail={data?.thumbnail} />
      <Detail {...newsDetailData} />
    </>
  );
};

export default Screen;
