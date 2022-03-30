import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Banner from '.';

export default {
  title: 'Components/templates/Banner',
  component: Banner,
  argTypes: {
    onSearch: { action: 'search' },
  },
} as Meta;

export const normal: Story = () => (
  <Banner
    image={{
      src: 'https://source.unsplash.com/random',
    }}
  />
);

export const title: Story = () => (
  <Banner
    image={{
      src: 'https://source.unsplash.com/random',
    }}
    isLayer
    title="CHÍNH SÁCH ĐIỀU KHOẢN"
  />
);

export const search: Story = ({
  onSearch,
}) => (
  <BrowserRouter>
    <Banner
      image={{
        src: 'https://source.unsplash.com/random',
      }}
      isLayer
      search={{
        placeholder: 'Tìm kiếm tin tức',
        onSearch,
      }}
      tag={{
        keyword: 'Từ khóa nổi bật:',
        list: [
          {
            text: 'Du lịch',
            href: 'du-lich',
          },
          {
            text: 'The King Dom',
            href: 'the-king-dom',
          },
          {
            text: 'Tour trọn gói',
            href: 'tour-tron-goi',
          },
        ],
      }}
    />
  </BrowserRouter>
);
