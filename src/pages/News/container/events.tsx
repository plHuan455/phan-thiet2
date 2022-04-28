import dayjs from 'dayjs';
import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';

import settings from '../hook/settings';

import Section from './section';

import { IconName } from 'components/atoms/Icon';
import { CardEventProps } from 'components/organisms/Card/Event';
import EventsTemplate from 'components/templates/Events';
import { useAsync } from 'hooks/useAsync';
import i18n from 'i18n';
import { getOverviewListService } from 'services/overviews';
import { OverviewEventsType, PaginationOverview } from 'services/overviews/types';
import CONSTANTS from 'utils/constants';
import { baseURL, getBlockData, redirectURL } from 'utils/functions';

interface EventsBlock {
  title: string;
  button: string;
}
interface EventsProps extends SectionBlocks {
  events?: PaginationOverview<OverviewEventsType>;
  keyword?: string;
}

type Meta = {
  page: number;
  lastPage: number;
}

const Events: React.FC<EventsProps> = ({ events, blocks, keyword }) => {
  const eventsBlock = getBlockData<EventsBlock>('event', blocks);
  const { language } = i18n;

  const [meta, setMeta] = useState<Meta>({ page: 1, lastPage: 1 });
  const [dataLoadMore, setDataLoadMore] = useState<CardEventProps[]>([]);

  const formatData = useCallback((item:OverviewEventsType):CardEventProps => ({
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
  }), [eventsBlock?.button, language]);

  const [eventExecute, eventState] = useAsync(getOverviewListService, {
    onSuccess: (res) => {
      const result = res.events.data.map(formatData);
      setMeta((prev) => ({ ...prev, page: res.events.currentPage }));
      setDataLoadMore(
        (prev) => ([...(prev || []), ...result]),
      );
    },
  });

  const dataInitial = useMemo(
    () => events?.data.map(formatData) || [],
    [formatData, events?.data],
  );

  const dataEvents = useMemo(() => [...dataInitial, ...dataLoadMore], [dataInitial, dataLoadMore]);

  useEffect(() => {
    setDataLoadMore([]);
    if (events) {
      setMeta({
        page: events.currentPage,
        lastPage: events.lastPage,
      });
    }
  }, [events]);

  const handleLoadMore = useCallback(() => {
    if (!eventState.loading
      && meta.page < meta.lastPage) {
      eventExecute({
        limit: 6,
        page: meta.page + 1,
        keyword,
        type: 'event',
      });
    }
  }, [eventExecute, eventState.loading, keyword, meta]);

  if (!events?.total) return null;

  return (
    <Section>
      <div className={`s-events ${eventState.loading ? 'loading-block' : ''}`}>
        <EventsTemplate
          title={eventsBlock?.title}
          listEvents={dataEvents}
          settings={{
            ...settings(),
          }}
          handleLoadMore={handleLoadMore}
          loading={eventState.loading}
        />
      </div>
    </Section>
  );
};

Events.defaultProps = {
  events: undefined,
  keyword: undefined,
};

export default React.memo(Events);
