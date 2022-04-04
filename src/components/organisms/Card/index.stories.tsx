import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Card from '.';

export default {
  title: 'Components/organisms/Card',
  // component: Card,
  argTypes: {},
} as Meta;

export const player: Story = () => (
  <div style={{ maxWidth: 391, background: 'gray', padding: 20 }}>
    <Card.Player
      thumbnail="https://source.unsplash.com/random"
      tag="The Kingdom"
      title="OCEAN RESIDENCE - MẢNH GHÉP ĐẶC SẮC MỚI TẠI NOVAWORLD PHAN THIET"
      dateTime="2 giờ trước"
    />
  </div>
);

export const event: Story = () => (
  <BrowserRouter>
    <div style={{ maxWidth: 394, background: 'gray', padding: 20 }}>
      <Card.Event
        thumbnail="https://source.unsplash.com/random"
        tag="The Kingdom"
        title="Nova World phan thiết và chuỗi cung cấp tiện ích"
        endTime="2022-04-10T07:47:00.595"
        href="/"
        summary={[
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
        ]}
      />
    </div>
  </BrowserRouter>
);

export const document: Story = () => (
  <BrowserRouter>
    <div style={{ maxWidth: 394, background: 'gray', padding: 20 }}>
      <Card.Normal
        thumbnail="https://source.unsplash.com/random"
        title="Nova World phan thiết và chuỗi cung cấp tiện ích"
        href="/"
        tag="The Kingdom"
        dateTime="2 giờ trước"
        url={{
          text: 'Tải xuống',
          iconName: 'downloadOrange',
          animation: 'download',
        }}
      />
    </div>
  </BrowserRouter>
);

export const news: Story = () => (
  <BrowserRouter>
    <div style={{ maxWidth: 394, background: 'gray', padding: 20 }}>
      <Card.Normal
        thumbnail="https://source.unsplash.com/random"
        title="Nova World phan thiết và chuỗi cung cấp tiện ích"
        href="/"
        tag="The Kingdom"
        dateTime="2 giờ trước"
        url={{
          text: 'Xem thêm',
          iconName: 'arrowRightCopper',
          animation: 'arrow',
        }}
      />
    </div>
  </BrowserRouter>
);
