import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Container from 'common/Container';
import Heading, { TextStyle } from 'components/atoms/Heading';
import ConsultancyForm, {
  ConsultancyProps as ConsultancyFormProps,
} from 'components/organisms/Consultancy';
import mapModifiers from 'utils/functions';

export interface ConsultancyProps {
  title: {
    text: string;
    modifiers?: TextStyle
  };
  py?: 'md' | 'xl'
  layer?: React.ReactNode;
  form: ConsultancyFormProps;
}

const Consultancy: React.FC<ConsultancyProps> = ({
  title,
  py = 'md',
  layer,
  form,
}) => (
  <div className={mapModifiers('t-consultancy', py)}>
    {layer}

    <Container>
      <Row>
        <Col xl={5}>
          <div className="t-consultancy_title">
            <Heading content={title.text} type="h2" modifiers={title.modifiers} />
          </div>
        </Col>
        <Col xl={7} className="u-mt-xl-0 u-mt-32">
          <div className="t-consultancy_form">
            <ConsultancyForm {...form} />
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

Consultancy.defaultProps = {};

export default Consultancy;
