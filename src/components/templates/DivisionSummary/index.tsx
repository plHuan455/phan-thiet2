import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Container from 'common/Container';
import Text from 'components/atoms/Text';
import Title from 'components/molecules/Title';
import Card from 'components/organisms/Card';
import { CardLayerProps } from 'components/organisms/Card/Layer';
import Carousel from 'components/organisms/Carousel';

interface DivisionSummaryProps {
  title?: string;
  description?: string;
  data?: CardLayerProps[];
}

const setting = {
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
  infinite: true,
  cssEase: 'ease-in-out',
  customPaging() {
    return (
      <span className="o-carousel_dot rect" />
    );
  },
};

const DivisionSummary: React.FC<DivisionSummaryProps> = ({
  title,
  description,
  data,
}) => (
  <div className="t-divisionSummary">
    <Container>
      <Row className="t-divisionSummary_row">
        <Col className="t-divisionSummary_left" lg={5}>
          <div className="t-divisionSummary_content">
            <div className="t-divisionSummary_content-heading">
              <Title type="h2" modifiers={['seaBlue', 's015', '700']} content={title} />
            </div>
            <div className="t-divisionSummary_content-desc">
              <Text modifiers={['14x20', 'davyGrey', '400']} content={description} />
            </div>
          </div>
        </Col>
        <Col className="t-divisionSummary_right" lg={6}>
          <div className="t-divisionSummary_wrap  u-ml-negative-16 u-mr-negative-16">
            {
              data && data.length > 2
                ? (
                  <Carousel settings={setting}>
                    {
                      data?.map((item, index) => (
                        <div key={`t-divisionSummary-${index.toString()}`} className="t-divisionSummary_listData-item u-pl-16 u-pr-16">
                          <Card.Layer
                            {...item}
                            ratio="258x334"
                            modifiers={['filter', 'r12']}
                          />
                        </div>
                      ))
                    }
                  </Carousel>
                )
                : (
                  <div className="t-divisionSummary_listData">
                    {
                      data?.map((item, index) => (
                        <div
                          key={`t-divisionSummary-${index.toString()}`}
                          className="t-divisionSummary_listData-item u-pl-16 u-pr-16"
                        >
                          <Card.Layer
                            {...item}
                            ratio="258x334"
                            modifiers={['filter', 'r12']}
                          />
                        </div>
                      ))
                    }
                  </div>
                )
            }
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

DivisionSummary.defaultProps = {
  title: '',
  description: '',
  data: [],
};

export default DivisionSummary;
