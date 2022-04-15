import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Container from 'common/Container';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Card from 'components/organisms/Card';
import { CardDivisionProps } from 'components/organisms/Card/Division';

interface SubdivisionProps {
  list?: CardDivisionProps[];
  title?: string;
  btn?: LinkTypes & {disabled?: boolean};
  onMore?: () => void
  loading?: boolean;
}

const Subdivision: React.FC<SubdivisionProps> = ({
  list,
  title,
  btn,
  loading,
  onMore,
}) => (
  <div className="t-subdivision">
    <Heading
      content={title}
      type="h4"
      modifiers={['700', 's015', 'center', 'gradientGreen', 'uppercase']}
    />
    <Container>
      <Row className="u-mt-8 u-ml-negative-16 u-mr-negative-16">
        {list?.map((card, index) => (
          <Col
            key={`card-${index.toString()}`}
            className="u-mt-16 u-mt-lg-32 u-pl-16 u-pr-16"
            lg={4}
            sm={6}
            xs={12}
          >
            <Card.Division
              {...card}
            />
          </Col>
        ))}
      </Row>
      {loading && (
      <div className="u-mt-16 u-pt-16 u-pb-16">
        <div className="d-flex justify-content-center">
          {/* TODO: edit iconName */}
          loading
          <Icon iconName="loadingWhite" size="36" />
        </div>
      </div>
      )}
      {btn && !btn?.disabled && (
      <div className="u-mt-16 u-mt-lg-32 d-flex justify-content-center">
        <Button
          {...btn}
          variant="primary-green"
          onClick={() => {
            if (onMore) onMore();
          }}
        >
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
  onMore: undefined,
  loading: undefined,
};

export default Subdivision;
