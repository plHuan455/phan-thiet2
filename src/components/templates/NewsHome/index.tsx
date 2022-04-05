import React from 'react';

import Container from 'common/Container';
import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Card from 'components/organisms/Card';
import { CardNormalProps } from 'components/organisms/Card/Normal';
import Carousel, { NextArrow, PrevArrow } from 'components/organisms/Carousel';

interface NewsHomeProps {
  title: string;
  dataList: CardNormalProps[];
  btnMore: {
    href?: string;
    target?:string;
    label:string
  }
}

const setting = {
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  infinite: false,
  cssEase: 'ease-in-out',
  customPaging() {
    return (
      <span className="o-carousel_dot circle" />
    );
  },
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
  ],
};

const NewsHome: React.FC<NewsHomeProps> = ({ title, dataList, btnMore }) => (
  <div className="t-newsHome">
    <Container>
      <div className="t-newsHome_wrapper">
        <div className="t-newsHome_header d-flex">
          <Heading type="h2" modifiers={['700', '32x48', 'gradientGreen']}>{title}</Heading>
          <Link target={btnMore?.target} href={btnMore?.href}>
            <div className="animate animate-arrowSlide d-flex align-items-center">
              <Text modifiers={['14x20', '400', 'copper']} content={btnMore.label} />
              <div className="u-ml-8" />
              <Icon iconName="arrowRightCopper" size="16" />
            </div>
          </Link>
        </div>
        <div className="t-newsHome_content">
          <Carousel settings={setting} innerDots>
            {dataList?.map((item, idx) => (
              <Card.Normal
                key={idx.toString()}
                {...item}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </Container>
  </div>
);

NewsHome.defaultProps = {
};

export default NewsHome;
