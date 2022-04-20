import React, { useMemo } from 'react';

import Banner from './banner';
import Detail, { DetailProps } from './detail';

import HelmetContainer from 'common/Helmet';
import LoadingPage from 'common/Navigation/loading';
import useDetail from 'hooks/useDetail';
import Error from 'pages/Error';
import { getNewsDetailService } from 'services/news';
import Constants from 'utils/constants';
import {
  baseString, baseURL, getFullDate, getTimePastToCurrent,
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
    dateLeave: getFullDate(data?.publishedAt),
    tags: data?.tags.map((item) => ({
      // TODO: Update href later
      href: '',
      name: item?.name,
    })) || [],
    subdivision: {
      name: data?.subdivision?.name,
      // TODO: add locale later
      slug: `/${Constants.PREFIX.DIVISION.VI}/${data?.subdivision?.slug}`,
    },
    relatedNews: data?.relatedNews?.map((item) => ({
      tag: baseString(data?.subdivision?.name),
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

  if (error) return <Error />;

  return (
    <>
      <HelmetContainer seoData={data?.seoData} ogData={data?.openGraph} />
      <Banner thumbnail={data?.thumbnail} />
      <Detail {...newsDetailData} />
    </>
  );
};

export default Screen;
