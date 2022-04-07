import { Story, Meta } from '@storybook/react';
import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';

import FlatMore from '.';

import Card from 'components/organisms/Card';

export default {
  title: 'Components/common/FlatMore',
  component: FlatMore,
  argTypes: {},
} as Meta;

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

export const normal: Story = () => (
  <BrowserRouter>
    <div style={{ height: '1000px' }}>
      <Container>
        <FlatMore
          title={{
            text: 'PHÂN KHU NOVAWORLD PHAN THIET',
            type: 'h4',
            modifiers: ['gradientGreen', '700', 's015'],
          }}
          link={{
            text: 'Xem tất cả',
            href: '/',
          }}
          data={data}
          render={(item) => (
            <Card.Event
              {...item}
            />
          )}
        />
      </Container>
    </div>
  </BrowserRouter>
);
