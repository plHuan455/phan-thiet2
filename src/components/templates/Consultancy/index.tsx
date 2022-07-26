import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Container from 'common/Container';
import Heading, { TextStyle } from 'components/atoms/Heading';
import Animate from 'components/organisms/Animate';
import ConsultancyForm, {
  ConsultancyProps as ConsultancyFormProps,
} from 'components/organisms/Consultancy';
import mapModifiers from 'utils/functions';

export interface ConsultancyTitle {
  text: string;
  modifiers?: TextStyle;
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export interface ConsultancyProps {
  title: ConsultancyTitle;
  py?: 'md' | 'lg'
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
    <div className="t-consultancy_content">
      <Container>
        <Row>
          <Col xl={5}>
            <div className="t-consultancy_title">
              <Heading content={title.text} type="h2" modifiers={title.modifiers} />
            </div>
          </Col>
          <Col xl={7} className="u-mt-xl-0 u-mt-32">
            <Animate type="fadeInUp" extendClassName="t-consultancy_form">
              <ConsultancyForm {...form} />
            </Animate>
          </Col>
        </Row>
      </Container>
    </div>
  </div>
);

Consultancy.defaultProps = {};

export default Consultancy;
