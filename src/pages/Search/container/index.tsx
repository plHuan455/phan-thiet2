import React, { useState, useRef } from 'react';
import { animated } from 'react-spring';

import useAnimation from '../animation';

import bgLeft from 'assets/images/searchResult/bg_searchResult_left.png';
import bgRight from 'assets/images/searchResult/bg_searchResult_right.png';
import HelmetContainer from 'common/Helmet';
import Image from 'components/atoms/Image';
import SearchResult from 'components/templates/SearchResult';
import { getOgDataPage } from 'utils/functions';

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

const news = new Array(9).fill({
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

const divisions = new Array(9).fill({
  imgSrc: 'https://source.unsplash.com/random',
  title: 'The Florida',
  description:
    'Ocean Residence kiến tạo nơi đáng  sống mới cho cư dân khi tận hưởng giá trị Ocean Residence kiến tạo nơi đáng  sống mới cho cư dân khi tận hưởng giá trị ..',
});

const Screen: React.FC<BasePageDataTypes<any>> = ({
  pageData,
  seoData,
}) => {
  const [tabActive, setTabActive] = useState<string | undefined>(
    dataTabList[0].slug,
  );
  const bgLeftRef = useRef<HTMLDivElement>(null);
  const { animate, animateReverse } = useAnimation({ ref: bgLeftRef });

  return (
    <>
      <HelmetContainer seoData={seoData} ogData={getOgDataPage(pageData)} />
      <animated.div style={animate}>
        <div className="p-search_bgLeft" ref={bgLeftRef}>
          <Image src={bgLeft} ratio="1x1" size="contain" />
        </div>
      </animated.div>
      <animated.div style={animateReverse}>
        <div className="p-search_bgRight">
          <Image src={bgRight} ratio="1x1" />
        </div>
      </animated.div>

      <SearchResult.Wrapper titleMain="Tìm kiếm">
        <SearchResult.Summary
          value="Nova world Phan Thiết"
          placeholder="Tìm kiếm"
          searchText="Novaworld Phan Thiết"
          length={9}
        />
        <SearchResult.Filter
          tabs={dataTabList}
          slugActive={tabActive}
          optionSort={optionSort}
          handleSelectTab={(tab) => setTabActive(tab)}
        />
        {tabActive === 'tin-tuc' && (
          <SearchResult.Content news={news} hashShowMore />
        )}
        {tabActive === 'phan-khu' && (
          <SearchResult.Content divisions={divisions} hashShowMore />
        )}
      </SearchResult.Wrapper>
    </>
  );
};

export default Screen;
