import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import NewsHome from '.';

export default {
  title: 'Components/templates/NewsHome',
  component: NewsHome,
  argTypes: {},
} as Meta;

const dataList = new Array(9).fill({
  thumbnail: 'https://source.unsplash.com/random',
  title: 'Nova World phan thiết và chuỗi cung cấp tiện ích',
  href: '/',
  tag: 'The Kingdom',
  dateTime: '2 giờ trước',
  url: {
    text: 'Tải xuống',
    iconName: 'downloadOrange',
    animation: 'download',
  },
});

export const normal: Story = () => (
  <BrowserRouter>
    <NewsHome
      dataList={dataList}
      title={{
        text: 'TIN TỨC CHUNG',
        modifiers: ['700', '32x48', 'gradientGreen'],
      }}
      btnMore={{
        label: 'Xem tất cả',
        href: '/',
        target: 'self',
      }}
    />
  </BrowserRouter>
);
