import React, { useState } from 'react';

import Container from 'common/Container';
import FlatList from 'common/FlatList';
import Arrow from 'components/atoms/Arrow';
import Icon from 'components/atoms/Icon';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Title from 'components/molecules/Title';
import Card from 'components/organisms/Card';
import Tabs, { Tab } from 'components/organisms/Tabs';

const dummyData = [
  {
    label: 'Tin tức',
    content: 'Content 1',
    slug: '',
  },
  {
    label: 'Hình ảnh',
    content: 'Content 2',
  },
  {
    label: 'Video',
    content: 'Content 3',
  },
  {
    label: 'Tài liệu khác',
    content: 'Content 3',
  },
];

const data = new Array(7).fill({
  thumbnail: 'https://source.unsplash.com/random',
  tag: 'The Kingdom',
  title: 'Nova World phan thiết và chuỗi cung cấp tiện ích',
  endTime: '2022-04-10T07:47:00.595',
  dateTime: '2 giờ trước',
  href: '/',
  summary: [
    {
      iconName: 'clock',
      text: '13:30 - 17:00',
    },
    {
      iconName: 'calendar',
      text: '30/04/2022',
    },
    {
      iconName: 'location',
      text: '2Bis Nguyễn Thị Minh Khai, Phường Đa Kao, Quận 1',
    },
  ],
});

const Library: React.FC = () => {
  const [indexActive, setIndexActive] = useState(0);

  return (
    <section
      className="s-library u-mt-md-80 u-mt-48 u-mb-md-80 u-mb-48"
    >
      <Container>
        <Title
          type="h2"
          modifiers={['s015', '400', 'seaBlue']}
          content="THƯ VIỆN THE KINGDOM"
        />
        <FlatList
          data={data}
          settings={{
            prevArrow: <Arrow.Prev />,
            nextArrow: <Arrow.Next />,
          }}
          render={(item) => {
            switch (indexActive) {
              case 0: return <Card.Event {...item} />;
              case 1: return <Card.Layer noContent ratio="354x221" modifiers={['r12']} {...item} />;
              case 2: return <Card.Player isReverse {...item} />;
              default: return (
                <Card.Normal
                  {...item}
                  url={{
                    text: 'Tải xuống',
                    iconName: 'downloadOrange',
                    animation: 'download',
                  }}
                />
              );
            }
          }}
        >
          <div className="s-library_wrapTab">
            <Tabs variableMutate={indexActive}>
              {dummyData.map((item, index) => (
                <Tab
                  key={`tab-${index.toString()}`}
                  label={item.label}
                  active={index === indexActive}
                  handleClick={() => setIndexActive(index)}
                />
              ))}
            </Tabs>
            <div className="d-lg-block d-none">
              <Link href="/" target="_self">
                <div className="animate animate-arrowSlide d-flex align-items-center">
                  <Text modifiers={['14x20', '400', 'copper']} content="Xem thêm" />
                  <div className="u-ml-8" />
                  <Icon iconName="arrowRightCopper" size="16" />
                </div>
              </Link>
            </div>
          </div>
        </FlatList>
        <div className="d-flex justify-content-center d-lg-none u-mt-32">
          <Link href="/" target="_self">
            <div className="animate animate-arrowSlide d-flex align-items-center">
              <Text modifiers={['14x20', '400', 'copper']} content="Xem thêm" />
              <div className="u-ml-8" />
              <Icon iconName="arrowRightCopper" size="16" />
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Library;
