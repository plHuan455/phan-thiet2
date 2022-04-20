/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import dayjs from 'dayjs';
import React, { useMemo } from 'react';

import { IconName } from 'components/atoms/Icon';
import EventsTemplate from 'components/templates/Events';
import { OverviewEventsType } from 'services/overviews/types';
import CONSTANTS from 'utils/constants';
import { baseURL, getBlockData } from 'utils/functions';

interface EventsBlock {
  title: string;
  button: string;
}
interface EventsProps extends SectionBlocks {
  events?: OverviewEventsType[];
}

const Events: React.FC<EventsProps> = ({ events, blocks }) => {
  const eventsBlock = getBlockData<EventsBlock>('event', blocks);

  const dataEvents = useMemo(() => {
    if (!events?.length) return [];

    return events?.map((item) => ({
      thumbnail: baseURL(item.thumbnail),
      // TODO: Update locale later
      tag: {
        text: item.subdivision?.name,
        url: `/${CONSTANTS.PREFIX.DIVISION.VI}/${item.slug}`,
      },
      title: item.title,
      endTime: item.startDate,
      // TODO: Update locale later
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
        text: eventsBlock?.button,
        url: `/${CONSTANTS.PREFIX.EVENT.VI}/${item.slug}`,
      },
    }));
  }, [events, eventsBlock]);

  return (
    <div className="s-events">
      <EventsTemplate
        title={eventsBlock?.title}
        listEvents={dataEvents}
      />
    </div>

  );
};

Events.defaultProps = {
  events: [],
};

export default Events;
