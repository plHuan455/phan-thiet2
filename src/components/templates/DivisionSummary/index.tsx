import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Container from 'common/Container';
import Heading from 'components/atoms/Heading';
import Text from 'components/atoms/Text';
import Animate from 'components/organisms/Animate';
import Card from 'components/organisms/Card';
import { CardLayerProps } from 'components/organisms/Card/Layer';
import Carousel from 'components/organisms/Carousel';

export interface DivisionSummaryProps {
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
    return <span className="o-carousel_dot rect inherit" style={{ backgroundColor: 'var(--theme)' }} />;
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
        <Col className="align-self-center" lg={6}>
          <Heading
            type="h2"
            modifiers={['s015', '400', 'inherit']}
            content={title}
          />
          <div className="u-mt-md-32 u-mt-16 t-divisionSummary_desc">
            <Text
              modifiers={['14x20', 'davyGrey', '400']}
              content={description}
            />
          </div>
        </Col>
        <Col lg={6}>
          <Animate type="fadeInUp" extendClassName={`t-divisionSummary_wrap ${data && data?.length > 2 ? 'carousel' : ''}`}>
            {data && data.length > 2 ? (
              <Carousel settings={{ lazyLoad: 'ondemand', ...setting }}>
                {data?.map((item, index) => (
                  <div
                    key={`t-divisionSummary-${index.toString()}`}
                    className="t-divisionSummary_listData-item u-pl-16 u-pr-16"
                  >
                    <Card.Layer
                      {...item}
                      ratio="258x334"
                      modifiers={['filter', 'r12', 'pd-8x16']}
                    />
                  </div>
                ))}
              </Carousel>
            ) : (
              <div className="t-divisionSummary_listData">
                {data?.map((item, index) => (
                  <div
                    key={`t-divisionSummary-${index.toString()}`}
                    className="t-divisionSummary_listData-item u-pl-16 u-pr-16"
                  >
                    <Card.Layer
                      {...item}
                      ratio="258x334"
                      modifiers={['filter', 'r12', 'pd-8x16']}
                    />
                  </div>
                ))}
              </div>
            )}
          </Animate>
        </Col>
      </Row>
    </Container>
  </div>
);

DivisionSummary.defaultProps = {
};

export default DivisionSummary;
