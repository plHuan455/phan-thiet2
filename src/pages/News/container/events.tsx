import dayjs from 'dayjs';
import React, { useMemo } from 'react';

import Section from './section';

import { IconName } from 'components/atoms/Icon';
import EventsTemplate from 'components/templates/Events';
import i18n from 'i18n';
import { OverviewEventsType } from 'services/overviews/types';
import CONSTANTS from 'utils/constants';
import { baseURL, getBlockData, redirectURL } from 'utils/functions';

interface EventsBlock {
  title: string;
  button: string;
}
interface EventsProps extends SectionBlocks {
  events?: OverviewEventsType[];
}

const Events: React.FC<EventsProps> = ({ events, blocks }) => {
  const eventsBlock = getBlockData<EventsBlock>('event', blocks);
  const { language } = i18n;

  const dataEvents = useMemo(() => {
    if (!events?.length) return [];

    return events?.map((item) => ({
      thumbnail: baseURL(item.thumbnail),
      tag: {
        text: item.subdivision?.name,
        url: redirectURL(CONSTANTS.PREFIX.DIVISION, item.slug, language),
      },
      title: item.title,
      endTime: item.startDate,
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
        url: redirectURL(CONSTANTS.PREFIX.EVENT, item.slug, language),
      },
    }));
  }, [events, eventsBlock, language]);

  if (!events?.length) return null;

  return (
    <Section>
      <div className="s-events">
        <EventsTemplate
          title={eventsBlock?.title}
          listEvents={dataEvents}
        />
      </div>
    </Section>
  );
};

Events.defaultProps = {
  events: [],
};

export default React.memo(Events);
