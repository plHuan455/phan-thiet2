import dayjs from 'dayjs';
import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

import { IconName } from 'components/atoms/Icon';
import EventsTemplate from 'components/templates/Events';
import useCountDown from 'hooks/useCountDown';
import getEventListService from 'services/event';
import Constants from 'utils/constants';
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
      url: `/${Constants.PREFIX.DIVISION.VI}/${item.slug}`,
    },
    title: item.title,
    endTime: item.startDate,
    // TODO: Update locale later
    href: `/${Constants.PREFIX.EVENT.VI}/${item.slug}`,
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
  })), [eventList]);
  return (
    <section className="u-pt-md-80 u-pb-48 u-pt-48 u-pb-md-80 position-relative">
      <EventsTemplate
        title={eventsBlock?.titleSection}
        button={{ ...eventsBlock?.link }}
        countDown={{
          title: eventList?.data[0].title || '',
          button: {
            // TODO: ADD Translations later
            text: 'Xem chi tiết',
            url: `/${Constants.PREFIX.EVENT.VI}/${eventList?.data[0]?.slug}`,
          },
          address: eventList?.data[0].address || '',
          duration: `${eventList?.data[0].startTime} - ${eventList?.data[0].endTime}`,
          date: dayjs(eventList?.data[0].startDate).format('DD/MM/YYYY'),
          list: [
            {
              label: 'ngày',
              value: days,
            },
            {
              label: 'giờ',
              value: hours,
            },
            {
              label: 'phút',
              value: mins,
            },
            {
              label: 'giây',
              value: secs,
            },
          ],
        }}
        listEvents={eventsData}
      />
    </section>
  );
};

export default Events;
