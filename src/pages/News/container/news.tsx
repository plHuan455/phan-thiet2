import React, { useRef } from 'react';

import useAnimation from '../hook/animation';

import ballon1 from 'assets/images/pages/news/ballon_1.png';
import leaf1 from 'assets/images/pages/news/leaf_1.png';
import leaf2 from 'assets/images/pages/news/leaf_2.png';
import Image from 'components/atoms/Image';
import NewsList from 'components/templates/NewsList';
import useScrollAnimate from 'hooks/useScrollAnimation';

const dataNews = new Array(3).fill({
  thumbnail: 'https://source.unsplash.com/random',
  dateTime: '2 phút trước',
  tag: 'The Kingdom',
  button: {
    text: 'Xem thêm',
    url: '/',
  },
  title: 'Nova World phan thiết và chuỗi cung cấp tiện ích chăm sóc sức khỏe',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat egestas eu egestas sed viverra urna. Purus accumsan feugiat feugiat nisl pulvinar faucibus eu. ',
});

const News: React.FC = () => {
  const { animated, ballonAnimate, slideAnimate } = useAnimation();
  const leaf1Ref = useRef<HTMLDivElement>(null);
  const leaf2Ref = useRef<HTMLDivElement>(null);
  const ballonRef = useRef<HTMLDivElement>(null);

  const isScrollLeaf1 = useScrollAnimate(leaf1Ref);
  const isScrollLeaf2 = useScrollAnimate(leaf2Ref);
  const isScrollBallon = useScrollAnimate(ballonRef);

  return (
    <div className="s-news">
      <animated.div style={isScrollBallon ? ballonAnimate : {}} className="s-news_ballon" ref={ballonRef}>
        <Image src={ballon1} alt="ballon" ratio="359x247" />
      </animated.div>
      <animated.div className="s-news_leaf1" style={isScrollLeaf1 ? ballonAnimate : {}} ref={leaf1Ref}>
        <Image src={leaf1} alt="leaf1" ratio="184x178" />
      </animated.div>
      <animated.div className="s-news_leaf2" style={isScrollLeaf2 ? slideAnimate : {}} ref={leaf2Ref}>
        <Image src={leaf2} alt="leaf2" ratio="548x612" />
      </animated.div>
      <NewsList
        title="TIN TỨC"
        listNews={dataNews}
        button={{
          text: 'Xem thêm',
        }}
      />
    </div>
  );
};
export default News;
