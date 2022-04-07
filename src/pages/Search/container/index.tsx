import React, { useState, useRef, useEffect } from 'react';
import { animated, easings, useSpring } from 'react-spring';

import bgLeft from 'assets/images/searchResult/bg_searchResult_left.png';
import bgRight from 'assets/images/searchResult/bg_searchResult_right.png';
import Image from 'components/atoms/Image';
import SearchResult from 'components/templates/SearchResult';
import useScrollAnimate from 'hooks/useScrollAnimation';

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

const Screen: React.FC = () => {
  const [tabActive, setTabActive] = useState<string | undefined>(
    dataTabList[0].slug,
  );
  const bgLeftRef = useRef<HTMLDivElement>(null);
  const isScrollBooloons = useScrollAnimate(bgLeftRef);

  const slideXAnimation = useSpring({
    x: 0,
  });
  const slideYAnimation = useSpring({
    y: -180,
  });
  const slideYReversAnimation = useSpring({
    y: 340,
  });

  useEffect(() => {
    if (isScrollBooloons) {
      const { x } = slideXAnimation;
      const { y: slideY } = slideYAnimation;
      const { y: slideYReverse } = slideYReversAnimation;
      x.start({
        from: 0,
        to: 50,
        loop: { reverse: true },
        config: { duration: 2000, easing: easings.easeInOutSine },
      });
      slideY.start({ from: -180, to: 0, config: { duration: 5500 } });
      slideYReverse.start({ from: 340, to: 0, config: { duration: 5300 } });

      setTimeout(() => {
        x.start({ cancel: true });
      }, 5800);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScrollBooloons]);

  return (
    <>
      <animated.div className="m-title_trail" style={{ ...slideXAnimation, ...slideYAnimation }}>
        <div className="p-search_bgLeft" ref={bgLeftRef}>
          <Image src={bgLeft} ratio="1x1" size="contain" />
        </div>
      </animated.div>
      <animated.div className="m-title_trail" style={{ ...slideXAnimation, ...slideYReversAnimation }}>
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
