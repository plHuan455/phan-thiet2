import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import SearchResult from '.';

export default {
  title: 'Components/templates/SearchResult',
  // component: SearchResult.Wrapper,
  argTypes: {},
} as Meta;

const dataTabList = [
  {
    slug: 'tin-tuc',
    label: 'Tin tức',
  },
  {
    slug: 'phan-khu',
    label: 'Phân Khu',
  },
];

const optionSort = [
  {
    id: '1',
    value: '1',
    label: 'Mới nhất',
  },
  {
    id: '2',
    value: '2',
    label: 'Cũ nhất',
  },
];

const data = new Array(9).fill({
  thumbnail: 'https://source.unsplash.com/random',
  title: 'Nova World phan thiết và chuỗi cung cấp tiện ích',
  href: '/',
  tag: 'The Kingdom',
  dateTime: '2 giờ trước',
  url: {
    text: 'Xem thêm',
    iconName: 'arrowRightCopper',
    animation: 'arrow',
  },
});

export const Normal: Story = () => (
  <Router>
    <SearchResult.Wrapper
      titleMain="Tìm kiếm"
    >
      <SearchResult.Summary
        value="Nova world Phan Thiết"
        placeholder="Tìm kiếm"
        searchText="Novaworld Phan Thiết"
        length={9}
      />
      <SearchResult.Filter
        tabs={dataTabList}
        slugActive="tin-tuc"
        optionSort={optionSort}
      />
      <SearchResult.Content
        news={data}
        hashShowMore
      />
    </SearchResult.Wrapper>
  </Router>
);
