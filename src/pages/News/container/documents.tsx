import React, { useRef } from 'react';

import useAnimation from '../hook/animation';

import ballon2 from 'assets/images/pages/news/ballon_2.png';
import leaf3 from 'assets/images/pages/news/leaf_3.png';
import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Image from 'components/atoms/Image';
import Card from 'components/organisms/Card';
import { CardNormalProps } from 'components/organisms/Card/Normal';
import useScrollAnimate from 'hooks/useScrollAnimation';

const dataDummy: CardNormalProps[] = [
  {
    thumbnail: 'https://source.unsplash.com/random',
    title: 'Nova World phan thiết và chuỗi cung cấp tiện ích',
    href: '/',
    tag: 'The Kingdom',
    dateTime: '2 giờ trước',
    url: {
      text: 'Tải xuống',
      iconName: 'downloadOrange',
      animation: 'download',
    },
  },
  {
    thumbnail: 'https://source.unsplash.com/random',
    title: 'Nova World phan thiết và chuỗi cung cấp tiện ích',
    href: '/',
    tag: 'The Kingdom',
    dateTime: '2 giờ trước',
    url: {
      text: 'Tải xuống',
      iconName: 'downloadOrange',
      animation: 'download',
    },
  },
  {
    thumbnail: 'https://source.unsplash.com/random',
    title: 'Nova World phan thiết và chuỗi cung cấp tiện ích',
    href: '/',
    tag: 'The Kingdom',
    dateTime: '2 giờ trước',
    url: {
      text: 'Tải xuống',
      iconName: 'downloadOrange',
      animation: 'download',
    },
  },
  {
    thumbnail: 'https://source.unsplash.com/random',
    title: 'Nova World phan thiết và chuỗi cung cấp tiện ích',
    href: '/',
    tag: 'The Kingdom',
    dateTime: '2 giờ trước',
    url: {
      text: 'Tải xuống',
      iconName: 'downloadOrange',
      animation: 'download',
    },
  },
];

const Documents: React.FC = () => {
  const { animated, ballonAnimate, slideReverseAnimate } = useAnimation();

  const leafRef = useRef<HTMLDivElement>(null);
  const ballonRef = useRef<HTMLDivElement>(null);

  const isScrollLeaf = useScrollAnimate(leafRef);
  const isScrollBallon = useScrollAnimate(ballonRef);
  return (
    <div className="s-documents">
      <animated.div style={isScrollLeaf ? slideReverseAnimate : {}} className="s-documents_leaf" ref={leafRef}>
        <Image src={leaf3} alt="ballon" ratio="1x1" />
      </animated.div>
      <animated.div style={isScrollBallon ? ballonAnimate : {}} className="s-documents_ballon" ref={ballonRef}>
        <Image src={ballon2} alt="ballon" ratio="359x247" />
      </animated.div>
      <Container>
        <FlatMore
          title={{
            text: 'Tài liệu khác',
            type: 'h4',
            modifiers: ['gradientGreen', '700', 's015', 'uppercase'],
          }}
          data={dataDummy}
          render={(item) => (
            <Card.Normal
              {...item}
            />
          )}
        />
      </Container>
    </div>
  );
};
export default Documents;
