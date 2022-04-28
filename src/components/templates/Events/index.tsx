import dayjs from 'dayjs';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Animate from 'components/organisms/Animate';
import Card from 'components/organisms/Card';
import { CardEventProps } from 'components/organisms/Card/Event';
import useCountDown from 'hooks/useCountDown';

export interface EventsProps {
  title?: string;
  button?: LinkTypes;
  listEvents?: CardEventProps[];
}

const Events: React.FC<EventsProps> = ({
  title = '',
  button,
  listEvents,
}) => {
  const { t } = useTranslation();
  const [firstItem, setFirstItem] = useState<CardEventProps | undefined>();
  const [anotherItem, setAnotherItem] = useState<CardEventProps[]>([]);

  const {
    days, hours, mins, secs,
  } = useCountDown({ endTime: firstItem?.endTime });

  const isEnd = (!Number(days) && !Number(hours) && !Number(mins) && !Number(secs));
  const isFirst = useRef(true);

  useEffect(() => {
    if (isEnd && isFirst && !isFirst.current) {
      const cloneAnotherItem = [...anotherItem];
      const cloneFirstItem = firstItem;
      const itemIndexHasEvent = anotherItem.findIndex(
        (item) => (dayjs(new Date()).isBefore(item.endTime)),
      );
      setFirstItem(cloneAnotherItem[itemIndexHasEvent]);
      if (cloneFirstItem) {
        cloneAnotherItem.push(cloneFirstItem);
        setAnotherItem(cloneAnotherItem.filter((_, index) => index !== itemIndexHasEvent));
      }
    }
    if (listEvents?.length && isFirst.current) {
      const itemIndexHasEvent = listEvents.findIndex(
        (item) => (dayjs(new Date()).isBefore(item.endTime)),
      );
      setFirstItem(listEvents[itemIndexHasEvent]);
      setAnotherItem(listEvents.filter((_, index) => index !== itemIndexHasEvent));
      isFirst.current = false;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEnd, listEvents]);

  return (
    <div className="t-events">
      <Container>
        <FlatMore
          title={{
            text: title || '',
            type: 'h4',
            modifiers: ['gradientGreen', '700', 's015'],
          }}
          link={{
            ...button,
            href: button?.url,
          }}
          data={anotherItem}
          render={(item) => (
            <Card.Event
              {...item}
            />
          )}
        >
          {firstItem && (
            <Animate type="fadeInUp" extendClassName="t-events_wrapCountDown u-mb-md-40 u-mb-20">
              <div className="t-events_countDown-title">
                <Heading type="h4" modifiers={['400', 'center', 'gradientGreen']} content={firstItem?.title} />
              </div>
              <div className="t-events_countDown">
                <div className="t-events_countDown-item">
                  <div className="t-events_countDown-value">
                    <Heading
                      modifiers={['s015', '400', 'copper', 'center']}
                      content={days}
                    />
                  </div>
                  <div className="t-events_countDown-label">
                    <Text
                      modifiers={['24x36', '200', 'center', 'copper', 's015']}
                      content={t('general.day')}
                    />
                  </div>
                </div>
                <div className="t-events_countDown-item">
                  <div className="t-events_countDown-value">
                    <Heading
                      modifiers={['s015', '400', 'copper', 'center']}
                      content={hours}
                    />
                  </div>
                  <div className="t-events_countDown-label">
                    <Text
                      modifiers={['24x36', '200', 'center', 'copper', 's015']}
                      content={t('general.hours')}
                    />
                  </div>
                </div>
                <div className="t-events_countDown-item">
                  <div className="t-events_countDown-value">
                    <Heading
                      modifiers={['s015', '400', 'copper', 'center']}
                      content={mins}
                    />
                  </div>
                  <div className="t-events_countDown-label">
                    <Text
                      modifiers={['24x36', '200', 'center', 'copper', 's015']}
                      content={t('general.min')}
                    />
                  </div>
                </div>
                <div className="t-events_countDown-item">
                  <div className="t-events_countDown-value">
                    <Heading
                      modifiers={['s015', '400', 'copper', 'center']}
                      content={secs}
                    />
                  </div>
                  <div className="t-events_countDown-label">
                    <Text
                      modifiers={['24x36', '200', 'center', 'copper', 's015']}
                      content={t('general.sec')}
                    />
                  </div>
                </div>
              </div>
                {firstItem?.summary && firstItem?.summary?.length > 0 && (
                  <>
                    <div className="t-events_wrapDate">
                      {firstItem?.summary[0] && (
                      <div className="t-events_wrapDate-duration">
                        <Icon iconName={firstItem?.summary[0]?.iconName} />
                        <Text modifiers={['raisinBlack', '400', '16x28']} content={firstItem?.summary[0]?.text} />
                      </div>
                      )}
                      {firstItem?.summary[1] && (
                      <div className="t-events_wrapDate-date">
                        <Icon iconName={firstItem?.summary[1]?.iconName} />
                        <Text modifiers={['raisinBlack', '400', '16x28']} content={firstItem?.summary[1]?.text} />
                      </div>
                      )}
                    </div>
                    {firstItem?.summary[2] && (
                    <div className="t-events_address">
                      <Icon iconName={firstItem?.summary[2]?.iconName} size="24" />
                      <Text modifiers={['raisinBlack', '400', '16x28']} content={firstItem?.summary[2]?.text} />
                    </div>
                    )}
                  </>
                )}
              <div className="t-events_button">
                <Link href={firstItem?.button?.url} target={firstItem?.button?.target}>
                  <Button variant="primary-green">{firstItem?.button?.text}</Button>
                </Link>
              </div>
            </Animate>
          )}
        </FlatMore>
      </Container>
    </div>
  );
};

export default Events;
