import dayjs from 'dayjs';
import React, { useMemo } from 'react';

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
  baseString, baseURL, getTimePastToCurrent,
} from 'utils/functions';

const Screen: React.FC = () => {
  const { language } = i18n;
  const staticAll = useAppSelector((state) => state.static.static);

  const slugPage = staticAll?.find(
    (e) => e.templateCode === CONSTANTS.TEMPLATE_CODE.NEW_IMAGE,
  )?.slug;

  const {
    data,
    loading,
    error,
  } = useDetail({ service: getNewsDetailService });

  const newsDetailData = useMemo(() : DetailProps => ({
    content: baseString(data?.content),
    title: baseString(data?.title),
    timeLeave: getTimePastToCurrent(data?.publishedAt),
    dateLeave: dayjs(data?.publishedAt).format('DD/MM/YYYY'),
    tags: data?.tags.map((item) => ({
      href: `${FUNCTIONS_LANGUAGE.languageURL(language)}${slugPage}?keyword=${item.name}`,
      name: item?.name,
    })) || [],
    subdivision: {
      name: data?.subdivision?.name,
      // TODO: add locale later
      slug: `/${CONSTANTS.PREFIX.DIVISION.VI}/${data?.subdivision?.slug}`,
    },
    relatedNews: data?.relatedNews?.map((item) => ({
      tag: {
        text: baseString(data?.subdivision?.name),
        url: `/${CONSTANTS.PREFIX.DIVISION.VI}/${data?.subdivision?.slug}`,
      },
      title: baseString(item.title),
      thumbnail: baseURL(item.thumbnail),
      href: `/tin-tuc/${item.slug}`,
      dateTime: getTimePastToCurrent(item?.publishedAt),
      url: {
        text: 'Xem thêm',
        iconName: 'arrowRightCopper',
        animation: 'arrow',
      },
    })),
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
