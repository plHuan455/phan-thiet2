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
import useCountDown from 'hooks/useCountDown';

export interface EventsProps {
  title?: string;
  button?: LinkTypes;
  listEvents?: CardEventProps[];
}

const Events: React.FC<EventsProps> = ({
  title = '',
  button,
  listEvents = [],
}) => {
  const firstItem = listEvents[0] || undefined;
  const anotherItem = listEvents?.slice(1) || [];

  const {
    days, hours, mins, secs,
  } = useCountDown({ endTime: firstItem?.endTime });

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
            <div className="t-events_wrapCountDown u-mb-md-40 u-mb-20">
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
                      content="ngày"
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
                      content="giờ"
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
                      content="phút"
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
                      content="giây"
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
            </div>
          )}
        </FlatMore>
      </Container>
    </div>
  );
};

Events.defaultProps = {

};

export default Events;
