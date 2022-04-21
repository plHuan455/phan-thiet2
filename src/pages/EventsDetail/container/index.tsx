import dayjs from 'dayjs';
import React, { useMemo } from 'react';

import Banner from './banner';
import Detail, { DetailProps } from './detail';

import LoadingPage from 'common/Navigation/loading';
import RedirectNav from 'common/Navigation/redirect';
import useDetail from 'hooks/useDetail';
import { getEventDetailService } from 'services/event';
import CONSTANTS from 'utils/constants';
import { baseString, baseURL, getTimePastToCurrent } from 'utils/functions';

const Screen: React.FC = () => {
  const {
    data,
    loading,
    error,
  } = useDetail({ service: getEventDetailService });

  const newsDetailData = useMemo(() : DetailProps => ({
    content: baseString(data?.description),
    title: baseString(data?.title),
    timeLeave: getTimePastToCurrent(data?.startDate),
    dateLeave: dayjs(data?.startDate).format('DD/MM/YYYY'),
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
    relatedNews: data?.relatedEvents?.map((item) => ({
      tag: {
        text: baseString(data?.subdivision?.name),
        url: `/${CONSTANTS.PREFIX.DIVISION.VI}/${data?.subdivision?.slug}`,
      },
      title: baseString(item.title),
      thumbnail: baseURL(item.thumbnail),
      href: `/${CONSTANTS.PREFIX.EVENT.VI}/${item.slug}`,
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
      <Banner thumbnail={baseURL(data?.thumbnail)} />
      <Detail {...newsDetailData} />
    </>
  );
};

export default Screen;
