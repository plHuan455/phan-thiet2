/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import dayjs from 'dayjs';
import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

import { IconName } from 'components/atoms/Icon';
import EventsTemplate from 'components/templates/Events';
import useCountDown from 'hooks/useCountDown';
import getEventListService from 'services/event';
import CONSTANTS from 'utils/constants';
import { baseURL, getBlockData } from 'utils/functions';

interface EventProps{
  titleSection: string;
  link?: LinkTypes;
  button: string;
}
const Events: React.FC<SectionBlocks> = ({ blocks }) => {
  const eventsBlock = getBlockData<EventProps>('event', blocks);
  const { data: eventList } = useQuery(
    'getEventListHome', () => getEventListService(),
  );

  const {
    days, hours, mins, secs,
  } = useCountDown({ endTime: eventList?.data[0].startDate || '' });

  const eventsData = useMemo(() => eventList?.data?.slice(1).map((item) => ({
    thumbnail: baseURL(item.thumbnail),
    // TODO: Update locale later
    tag: {
      text: item.subdivision?.name,
      url: `/${CONSTANTS.PREFIX.DIVISION.VI}/${item.slug}`,
    },
    title: item.title,
    endTime: item.startDate,
    // TODO: Update locale later
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
      text: 'Xem Chi Tiết',
      url: `/${CONSTANTS.PREFIX.EVENT.VI}/${item.slug}`,
    },
  })), [eventList]);
  return (
    <section className="u-pt-md-80 u-pb-48 u-pt-48 u-pb-md-80 position-relative">
      <EventsTemplate
        title={eventsBlock?.titleSection}
        button={{ ...eventsBlock?.link }}
        listEvents={eventsData}
      />
    </section>
  );
};

export default Events;
