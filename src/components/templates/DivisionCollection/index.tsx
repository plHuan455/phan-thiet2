import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Collection, { CollectionProps } from './components/Collection';

import Container from 'common/Container';
import Heading, { TextStyle } from 'components/atoms/Heading';
import Text from 'components/atoms/Text';
import Carousel, { NextArrow, PrevArrow } from 'components/organisms/Carousel';

interface DivisionCollectionProps {
  title: {
    text: string;
    modifiers?: TextStyle;
  };
  subTitle: string;
  dataList: CollectionProps[];
}
const setting = {
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  infinite: false,
  cssEase: 'ease-in-out',
  customPaging() {
    return <span className="o-carousel_dot circle" />;
  },
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        dots: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: false,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
  ],
};

const DivisionCollection: React.FC<DivisionCollectionProps> = ({
  title,
  subTitle,
  dataList,
}) => (
  <div className="t-divisionCollection">
    <Container>
      <div className="t-divisionCollection_wrapper">
        <Row className="align-items-center u-mb-32 u-mb-md-64">
          <Col xl={3}>
            <Heading modifiers={title.modifiers} content={title.text} />
          </Col>
          <Col xl={9}>
            <Text modifiers={['400', '14x20', 'davyGrey']} content={subTitle} />
          </Col>
        </Row>
        <div className="t-divisionCollection_content">
          <Carousel settings={setting} innerDots>
            {dataList?.map((item, idx) => (
              <Collection key={idx.toString()} {...item} />
            ))}
          </Carousel>
        </div>
      </div>
    </Container>
  </div>
);

DivisionCollection.defaultProps = {};

export default DivisionCollection;
