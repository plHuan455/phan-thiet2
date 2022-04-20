import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Events from '.';

export default {
  title: 'Components/templates/Events',
  component: Events,
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
  button: {
    text: 'Xem Chi Tiết',
    url: '/',
  },
});

export const Normal: Story = () => (
  <BrowserRouter>
    <Events
      title="SỰ KIỆN"
      button={{
        text: 'Xem tất cả',
        url: '/',
      }}
        // countDown={{
        //   title: 'Một vòng trải nghiệm siêu thành phố biển',
        //   button: {
        //     text: 'Xem chi tiết',
        //   },
        //   address: '2Bis Nguyễn Thị Minh Khai, Phường Đa Kao, Quận 1',
        //   duration: '13:30 - 17:00',
        //   date: '30/04/2022',
        //   list: [
        //     {
        //       label: 'ngày',
        //       value: days,
        //     },
        //     {
        //       label: 'giờ',
        //       value: hours,
        //     },
        //     {
        //       label: 'phút',
        //       value: mins,
        //     },
        //     {
        //       label: 'giây',
        //       value: secs,
        //     },
        //   ],
        // }}
      listEvents={data}
    />
  </BrowserRouter>
);
