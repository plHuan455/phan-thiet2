import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import CardVideo from '.';

export default {
  title: 'Components/molecules/CardVideo',
  component: CardVideo,
  argTypes: {},
} as Meta;

const dataVideos = {
  thumbnail: 'https://source.unsplash.com/random',
  location: 'The Kingdom', // all
  title: 'OCEAN RESIDENCE - MẢNH GHÉP ĐẶC SẮC MỚI TẠI NOVAWORLD PHAN THIET', // videos
  dateTime: '2 giờ trước', // videos

};

export const Default: Story = () => (
  <BrowserRouter>
    <div style={{ maxWidth: 391, background: 'gray', padding: 20 }}>
      <CardVideo
        {...dataVideos}
      />
    </div>
  </BrowserRouter>
);

export const Reverse: Story = () => (
  <BrowserRouter>
    <div style={{ maxWidth: 391, background: 'gray', padding: 20 }}>
      <CardVideo
        {...dataVideos}
        isReverse
      />
    </div>
  </BrowserRouter>
);
