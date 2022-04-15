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

export const search: Story = () => (
  <BrowserRouter>
    <Banner
      image={{
        src: 'https://source.unsplash.com/random',
      }}
      isLayer
      search={{
        placeholder: 'Tìm kiếm tin tức',
        onSearch: (val) => console.log(val),
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
      isSuggest
      optionSuggest={[
        {
          keyword: 'Travel',
          id: 'Travel',
        },
        {
          keyword: 'Du lịch',
          id: 'Du lịch',
        },
        {
          keyword: 'Travel',
          id: 'Travel',
        },
        {
          keyword: 'Du lịch',
          id: 'Du lịch',
        },
        {
          keyword: 'Travel',
          id: 'Travel',
        },
        {
          keyword: 'Du lịch',
          id: 'Du lịch',
        },
        {
          keyword: 'Travel',
          id: 'Travel',
        },
        {
          keyword: 'Du lịch',
          id: 'Du lịch',
        },
        {
          keyword: 'Travel',
          id: 'Travel',
        },
      ]}
    />
  </BrowserRouter>
);
