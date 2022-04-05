import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import {
  GoogleMap, GoogleMapProps, InfoAddress, PositionMarker,
} from './component';

import Container from 'common/Container';

interface MapContactProps extends GoogleMapProps {
  title?: string;
  defaultPosition?: PositionMarker;
}

const MapContact: React.FC<MapContactProps> = ({
  list,
  title,
  defaultPosition,
  ...props
}) => {
  const [zoomPosition, setZoomPosition] = useState<PositionMarker>();

  return (
    <div className="t-mapContact">
      <Container>
        <Row>
          <Col lg={6} className="t-mapContact_left">
            <InfoAddress
              title={title}
              list={list}
              onClick={(position) => setZoomPosition(position)}
            />
          </Col>
          <Col lg={6} className="t-mapContact_right">
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

MapContact.defaultProps = {
  title: undefined,
  defaultPosition: undefined,
};

export default MapContact;
