import dayjs from 'dayjs';
import React, { useMemo } from 'react';

import Banner from './banner';
import Detail, { DetailProps } from './detail';

import HelmetContainer from 'common/Helmet';
import LoadingPage from 'common/Navigation/loading';
import RedirectNav from 'common/Navigation/redirect';
import useDetail from 'hooks/useDetail';
import { getNewsDetailService } from 'services/news';
import CONSTANTS from 'utils/constants';
import {
  baseString, baseURL, getTimePastToCurrent,
} from 'utils/functions';

const Screen: React.FC = () => {
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
      // TODO: Update href later
      href: '',
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
  }), [data]);

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
