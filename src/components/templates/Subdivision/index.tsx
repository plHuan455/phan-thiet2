import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Container from 'common/Container';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import SubDivisionCard, { SubDivisionCardProps } from 'components/molecules/SubDivisionCard';

interface SubdivisionProps {
  list?: SubDivisionCardProps[];
  title?: string;
  btn?: LinkTypes;
}

const Subdivision: React.FC<SubdivisionProps> = ({
  list,
  title,
  btn,
}) => (
  <div className="t-subdivision">
    <Heading type="h4" content={title} modifiers={['700', 's015', 'center', 'gradientGreen', 'uppercase']} />
    <Container>
      <Row className="u-mt-8">
        {list?.map((card, index) => (
          <Col
            key={`card-${index.toString()}`}
            className="u-mt-16 u-mt-lg-32"
            md={6}
            lg={4}
          >
            <SubDivisionCard
              {...card}
            />
          </Col>
        ))}
      </Row>
      {btn && (
      <div className="u-mt-16 u-mt-lg-32 d-flex justify-content-center">
        <Button {...btn} variant="primary-green">
          {btn?.text}
        </Button>
      </div>
      )}
    </Container>
  </div>
);

Subdivision.defaultProps = {
  list: undefined,
  title: undefined,
  btn: undefined,
};

export default Subdivision;
