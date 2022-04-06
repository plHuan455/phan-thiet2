import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import NewsList from '.';

export default {
  title: 'Components/templates/NewsList',
  component: NewsList,
  argTypes: {},
} as Meta;

const dataDummy = new Array(3).fill({
  thumbnail: 'https://source.unsplash.com/random',
  dateTime: '1 phút trước',
  tag: 'The Kingdom',
  button: {
    text: 'Xem thêm',
    url: '/',
  },
  title: 'Nova World phan thiết và chuỗi cung cấp tiện ích chăm sóc sức khỏe',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat egestas eu egestas sed viverra urna. Purus accumsan feugiat feugiat nisl pulvinar faucibus eu. ',
});

export const normal: Story = () => (
  <BrowserRouter>
    <NewsList
      title="TIN TỨC"
      listNews={dataDummy}
      button={{
        text: 'Xem thêm',
        url: '/',
      }}
    />
  </BrowserRouter>
);
