import dayjs from 'dayjs';
import React, { useMemo } from 'react';

import Banner from './banner';
import Detail, { DetailProps } from './detail';

import LoadingPage from 'common/Navigation/loading';
import RedirectNav from 'common/Navigation/redirect';
import { IconName } from 'components/atoms/Icon';
import useDetail from 'hooks/useDetail';
import i18n from 'i18n';
import FUNCTIONS_LANGUAGE from 'i18n/functions';
import { getEventDetailService } from 'services/event';
import { useAppSelector } from 'store/hooks';
import CONSTANTS from 'utils/constants';
import { baseString, baseURL, getTimePastToCurrent } from 'utils/functions';

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
  } = useDetail({ service: getEventDetailService });

  const newsDetailData = useMemo(() : DetailProps => ({
    content: baseString(data?.description),
    title: baseString(data?.title),
    timeLeave: getTimePastToCurrent(data?.startDate),
    dateLeave: dayjs(data?.startDate).format('DD/MM/YYYY'),
    tags: data?.tags.map((item) => ({
      href: `${FUNCTIONS_LANGUAGE.languageURL(language)}${slugPage}?keyword=${item.name}`,
      name: item?.name,
    })) || [],
    subdivision: {
      name: data?.subdivision?.name,
      // TODO: add locale later
      slug: `/${CONSTANTS.PREFIX.DIVISION.VI}/${data?.subdivision?.slug}`,
    },
    related: data?.relatedEvents?.map((item) => ({
      thumbnail: baseURL(item.thumbnail),
      tag: {
        text: baseString(data?.subdivision?.name),
        url: `/${CONSTANTS.PREFIX.DIVISION.VI}/${data?.subdivision?.slug}`,
      },
      title: baseString(item.title),
      endTime: item.startDate,
      // TODO: Add locale later
      href: `/${CONSTANTS.PREFIX.EVENT.VI}/${item.slug}`,
      summary: [
        {
          iconName: 'clock' as IconName,
          text: `${item.startTime} - ${item.endTime}`,
        },
        {
          iconName: 'calendar' as IconName,
          text: dayjs(item.startDate).format('DD/MM/YYYY'),
        },
        {
          iconName: 'location' as IconName,
          text: item.address,
        },
      ],
      button: {
        // TODO: translate later
        text: 'Xem chi tiết',
        url: `/${CONSTANTS.PREFIX.EVENT.VI}/${item.slug}`,
      },
    })),
  }), [data, slugPage, language]);

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
