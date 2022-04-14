import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Collection, { CollectionProps } from './components/Collection';

import Container from 'common/Container';
import FlatList from 'common/FlatList';
import Arrow from 'components/atoms/Arrow';
import Heading from 'components/atoms/Heading';
import Text from 'components/atoms/Text';

interface DivisionCollectionProps {
  title: string;
  description?: string;
  dataList: CollectionProps[];
}
const settings = {
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <Arrow.Prev />,
  nextArrow: <Arrow.Next />,
  infinite: false,
  cssEase: 'ease-in-out',
  customPaging() {
    return <span className="o-carousel_dot rect inherit" style={{ backgroundColor: 'var(--theme)' }} />;
  },
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
  ],
};

const DivisionCollection: React.FC<DivisionCollectionProps> = ({
  title,
  description,
  dataList,
}) => (
  <div className="t-divisionCollection" style={{ color: 'var(--theme)' }}>
    <Container>
      <div className="t-divisionCollection_wrapper">
        <Row className="d-xl-flex align-items-xl-center">
          <Col xl={3}>
            <Heading type="h2" modifiers={['400', 'inherit', 's015', 'uppercase']} content={title} />
          </Col>
          <Col xl={9} className="u-mt-16 u-mt-md-24 u-mt-xl-0">
            <Text modifiers={['400', '14x20', 'davyGrey']} content={description} />
          </Col>
        </Row>
        <div className="u-mt-md-64 u-mt-32">
          <FlatList
            settings={settings}
            data={dataList}
            render={(item) => (
              <Collection {...item} />
            )}
          />
        </div>
      </div>
    </Container>
  </div>
);

DivisionCollection.defaultProps = {
  description: undefined,
};

export default DivisionCollection;
