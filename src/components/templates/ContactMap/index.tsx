import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import {
  GoogleMap, GoogleMapProps, InfoAddress, PositionMarker,
} from './component';

import Container from 'common/Container';

interface ContactMapProps extends GoogleMapProps {
  title?: string;
  defaultPosition?: PositionMarker;
}

const ContactMap: React.FC<ContactMapProps> = ({
  list,
  title,
  defaultPosition,
  ...props
}) => {
  const [zoomPosition, setZoomPosition] = useState<PositionMarker>();

  return (
    <div className="t-contactMap u-pt-md-80 u-pb-md-80 u-pt-48 u-pb-48">
      <Container>
        <Row className="u-ml-negative-16 u-mr-negative-16">
          <Col lg={6} className="t-contactMap_left u-pl-16 u-pr-16">
            <InfoAddress
              title={title}
              list={list}
              onClick={(position) => setZoomPosition(position)}
            />
          </Col>
          <Col lg={6} className="t-contactMap_right u-pl-16 u-pr-16">
            {defaultPosition && (
            <GoogleMap
              list={list}
              zoomPosition={zoomPosition || defaultPosition}
              zoomView={14}
              {...props}
            />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

ContactMap.defaultProps = {
  title: undefined,
  defaultPosition: undefined,
};

export default ContactMap;
