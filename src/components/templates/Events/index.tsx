import React from 'react';

import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Card from 'components/organisms/Card';
import { CardEventProps } from 'components/organisms/Card/Event';

export interface EventsProps {
  title?: string;
  button?: LinkTypes;
  countDown?: {
    title: string;
    list: {
      label: string;
      value: string;
    }[]
    address: string;
    duration: string;
    date: string;
    button: LinkTypes;
  }
  listEvents?: CardEventProps[];
}

const Events: React.FC<EventsProps> = ({
  title = '',
  button,
  countDown,
  listEvents = [],
}) => (
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
        data={listEvents}
        render={(item) => (
          <Card.Event
            {...item}
          />
        )}
      >
        <div className="t-events_wrapCountDown u-mb-md-40 u-mb-20">
          <div className="t-events_countDown-title">
            <Heading type="h4" modifiers={['400', 'center', 'gradientGreen']} content={countDown?.title} />
          </div>
          <div className="t-events_countDown">
            {
              countDown?.list?.map((item, index) => (
                <div key={`t-events_countDown-${index.toString()}`} className="t-events_countDown-item">
                  <div className="t-events_countDown-value">
                    <Heading modifiers={['s015', '400', 'copper', 'center']} content={item.value} />
                  </div>
                  <div className="t-events_countDown-label">
                    <Text modifiers={['24x36', '200', 'center', 'copper', 's015']} content={item.label} />
                  </div>
                </div>
              ))
            }
          </div>
          <div className="t-events_wrapDate">
            <div className="t-events_wrapDate-duration">
              <Icon iconName="clock" />
              <Text modifiers={['raisinBlack', '400', '16x28']} content={countDown?.duration} />
            </div>
            <div className="t-events_wrapDate-date">
              <Icon iconName="calendar" />
              <Text modifiers={['raisinBlack', '400', '16x28']} content={countDown?.date} />
            </div>
          </div>
          <div className="t-events_address">
            <Icon iconName="location" size="24" />
            <Text modifiers={['raisinBlack', '400', '16x28']} content={countDown?.address} />
          </div>
          <div className="t-events_button">
            <Link href={countDown?.button?.url} target={countDown?.button?.target}>
              <Button variant="primary-green">{countDown?.button.text}</Button>
            </Link>
          </div>
        </div>
      </FlatMore>
    </Container>
  </div>
);

Events.defaultProps = {

};

export default Events;
