import dayjs from 'dayjs';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

import { IconName } from 'components/atoms/Icon';
import EventsTemplate from 'components/templates/Events';
import i18n from 'i18n';
import getEventListService from 'services/event';
import CONSTANTS from 'utils/constants';
import { baseURL, getBlockData, redirectURL } from 'utils/functions';

interface EventProps{
  titleSection: string;
  link?: LinkTypes;
  button: string;
}
const Events: React.FC<SectionBlocks> = ({ blocks }) => {
  const { t } = useTranslation();
  const { language } = i18n;
  const eventsBlock = getBlockData<EventProps>('event', blocks);
  const { data: eventList } = useQuery(
    'getEventListHome', () => getEventListService(),
  );

  const eventsData = useMemo(() => eventList?.data?.map((item) => ({
    thumbnail: baseURL(item.thumbnail),
    tag: {
      text: item?.subdivision?.name,
      url: redirectURL(CONSTANTS.PREFIX.DIVISION, item.slug, language),
    },
    title: item.title,
    endTime: item.startDate,
    url: redirectURL(CONSTANTS.PREFIX.EVENT, item.slug, language),
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
      text: t('button.detail'),
      url: redirectURL(CONSTANTS.PREFIX.EVENT, item.slug, language),
    },

  })), [eventList, language, t]);
  return (
    <section className="u-pt-md-30 u-pt-lg-40 u-pb-20 u-pt-20 u-pb-md-30 u-pb-lg-40 position-relative">
      <EventsTemplate
        title={eventsBlock?.titleSection}
        button={{ ...eventsBlock?.link }}
        listEvents={eventsData}
      />
    </section>
  );
};

export default Events;
