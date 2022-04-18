import React, { useState } from 'react';

import Container from 'common/Container';
import FlatList from 'common/FlatList';
import Arrow from 'components/atoms/Arrow';
import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Card from 'components/organisms/Card';
import Tabs, { Tab } from 'components/organisms/Tabs';
import { CardImage } from 'pages/News/container/images';

const dummyData = [
  {
    label: 'Tin tức',
  },
  {
    label: 'Hình ảnh',
  },
  {
    label: 'Video',
  },
  {
    label: 'Tài liệu khác',
  },
];

interface LibraryProps {
  title?: string;
}

const Library: React.FC<LibraryProps> = ({ title }) => {
  const [indexActive, setIndexActive] = useState(0);

  return (
    <section
      className="s-library u-mt-md-80 u-mt-48 u-mb-md-80 u-mb-48"
    >
      <Container>
        <Heading
          type="h2"
          modifiers={['s015', '400', 'seaBlue']}
          content={title}
        />
        <FlatList
          data={new Array(7).fill('')}
          settings={{
            prevArrow: <Arrow.Prev />,
            nextArrow: <Arrow.Next />,
            customPaging() {
              return <span className="o-carousel_dot rect inherit" style={{ backgroundColor: 'var(--theme)' }} />;
            },
          }}
          render={() => {
            switch (indexActive) {
              case 0:
                return (
                  <Card.Normal
                    thumbnail="https://source.unsplash.com/random"
                    title="Nova World phan thiết và chuỗi cung cấp tiện ích"
                    href="/"
                    tag="The Kingdom"
                    dateTime="2 giờ trước"
                    url={{
                      text: 'Xem thêm',
                      iconName: 'arrowRightCopper',
                      animation: 'arrow',
                    }}
                  />
                );
              case 1: return (
                <CardImage
                  thumbnail="https://source.unsplash.com/random"
                  handleClick={() => ''}
                />
              );
              case 2: return (
                <Card.Player
                  thumbnail="https://source.unsplash.com/random"
                  tag="The Kingdom"
                  title="OCEAN RESIDENCE - MẢNH GHÉP ĐẶC SẮC MỚI TẠI NOVAWORLD PHAN THIET"
                  dateTime="2 giờ trước"
                  modifiers={['reverse', 'shadow']}
                />
              );
              default: return (
                <Card.Normal
                  thumbnail="https://source.unsplash.com/random"
                  title="ƯU ĐÃI QUÝ I/2022"
                  href="/"
                  tag="The Kingdom"
                  dateTime="2 giờ trước"
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

Library.defaultProps = {
  title: '',
};

export default Library;
