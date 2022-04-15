import React from 'react';

import EventsTemplate from 'components/templates/Events';
import useCountDown from 'hooks/useCountDown';
import { getBlockData } from 'utils/functions';

const data = new Array(7).fill({
  thumbnail: 'https://source.unsplash.com/random',
  tag: 'The Kingdom',
  title: 'Nova World phan thiết và chuỗi cung cấp tiện ích',
  endTime: '2022-04-10T07:47:00.595',
  href: '/',
  summary: [
    {
      iconName: 'clock',
      text: '13:30 - 17:00',
    },
    {
      iconName: 'calendar',
      text: '30/04/2022',
    },
    {
      iconName: 'location',
      text: '2Bis Nguyễn Thị Minh Khai, Phường Đa Kao, Quận 1',
    },
  ],
});
interface EventProps{
  titleSection: string;
  link?: LinkTypes;
  button: string;
}
const Events: React.FC<SectionBlocks> = ({ blocks }) => {
  const eventsBlock = getBlockData<EventProps>('event', blocks);

  const {
    days, hours, mins, secs,
  } = useCountDown({ endTime: '2022-04-20T07:47:00.595' });
  return (
    <section className="u-pt-md-80 u-pb-48 u-pt-48 u-pb-md-80 position-relative">
      <EventsTemplate
        title={eventsBlock?.titleSection}
        button={{ ...eventsBlock?.link }}
        countDown={{
          title: 'Một vòng trải nghiệm siêu thành phố biển',
          button: {
            text: eventsBlock?.button,
          },
          address: '2Bis Nguyễn Thị Minh Khai, Phường Đa Kao, Quận 1',
          duration: '13:30 - 17:00',
          date: '30/04/2022',
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
        listEvents={data}
      />
    </section>
  );
};

export default Events;
