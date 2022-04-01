import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import CardVertical from '.';

import { IconName, IconSize } from 'components/atoms/Icon';

export default {
  title: 'Components/molecules/CardVertical',
  component: CardVertical,
  argTypes: {},
} as Meta;

const dataEvent = {
  thumbnail: 'https://source.unsplash.com/random',
  thumbnailSize: '354x199' as Ratio,
  location: 'The Kingdom', // all

  title: 'Nova World phan thiết và chuỗi cung cấp tiện ích', // except videos
  content: {
    startDate: '13:30',
    endDate: '17:00',
    dateTime: '30/04/2022',
    address: '2Bis Nguyễn Thị Minh Khai, Phường Đa Kao, Quận 1',
  },
  type: 'event', // required
  btnMore: {
    label: 'Xem thêm',
    href: '/',
    target: 'self',
    icon: {
      name: 'arrowRightCopper' as IconName,
      size: '11' as IconSize,
    },
  },
  path: {
    href: '/',
    target: 'self',
  },
  timeCountDown: 'Fri Apr 01 2022 20:41:08 GMT+0000',
};

const dataSearch = {
  thumbnail: 'https://source.unsplash.com/random',
  thumbnailSize: '354x199' as Ratio,
  location: 'The Kingdom', // all
  title: 'Nova World phan thiết và chuỗi cung cấp tiện ích', // except videos
  dateTime: '2 giờ trước', // videos
  type: 'search', // required
  btnMore: {
    label: 'Xem thêm',
    href: '/',
    target: 'self',
    icon: {
      name: 'arrowRightCopper' as IconName,
      size: '11' as IconSize,
    },
  },
  isShadow: true,
  path: {
    href: '/',
    target: 'self',
  },
};

const dataDocs = {
  thumbnail: 'https://source.unsplash.com/random',
  thumbnailSize: '354x199' as Ratio,
  location: 'The Kingdom', // all
  title: 'ƯU ĐÃI QUÝ I/2022', // except videos
  dateTime: '2 giờ trước', // videos
  type: 'document', // required
  btnMore: {
    label: 'Tải xuống',
    href: '/',
    target: 'self',
    icon: {
      name: 'downloadOrange' as IconName,
      size: '20' as IconSize,
    },
  },
  isShadow: true,
  path: {
    href: '/',
    target: 'self',
  },
};

export const Event: Story = () => (
  <BrowserRouter>
    <CardVertical
      {...dataEvent}
    />
  </BrowserRouter>
);

export const Document: Story = () => (
  <BrowserRouter>
    <CardVertical
      {...dataDocs}
    />
  </BrowserRouter>
);

export const Search: Story = () => (
  <BrowserRouter>
    <CardVertical
      {...dataSearch}
    />
  </BrowserRouter>
);
