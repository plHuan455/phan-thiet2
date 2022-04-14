import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

import { IconName } from 'components/atoms/Icon';
import EventsTemplate from 'components/templates/Events';
import useCountDown from 'hooks/useCountDown';
import getEventListService from 'services/event';
import { baseURL, formatDateDDMMYYYY, getBlockData } from 'utils/functions';

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
    tag: 'The Kingdom',
    title: item.title,
    endTime: item.startDate,
    href: `su-kien/${item.slug}`,
    summary: [
      {
        iconName: 'clock' as IconName,
        text: `${item.startTime} - ${item.endTime}`,
      },
      {
        iconName: 'calendar' as IconName,
        text: formatDateDDMMYYYY(item.startDate),
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
            url: 'su-kien/slug',
          },
          address: eventList?.data[0].address || '',
          duration: `${eventList?.data[0].startTime} - ${eventList?.data[0].endTime}`,
          date: formatDateDDMMYYYY(eventList?.data[0].startDate),
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
