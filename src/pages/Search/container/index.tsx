import React from 'react';

import bgLeft from 'assets/images/searchResult/bg_searchResult_left.png';
import bgRight from 'assets/images/searchResult/bg_searchResult_right.png';
import Image from 'components/atoms/Image';
import SearchResult from 'components/templates/SearchResult';

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

const Screen: React.FC = () => (
  <>
    <div className="p-search_bgLeft">
      <Image src={bgLeft} ratio="1x1" size="contain" />
    </div>
    <div className="p-search_bgRight">
      <Image src={bgRight} ratio="1x1" />
    </div>
    <SearchResult.SearchResultWrap
      titleMain="Tìm kiếm"
    >
      <SearchResult.SearchTop
        value="Nova world Phan Thiết"
        placeholder="Tìm kiếm"
        searchText="Novaworld Phan Thiết"
        length={9}
      />
      <SearchResult.SearchFilter
        tabs={dataTabList}
        slugActive="tin-tuc"
        optionSort={optionSort}
      />
      <SearchResult.SearchContent
        data={data}
        hashShowMore
      />
    </SearchResult.SearchResultWrap>
  </>
);

export default Screen;
