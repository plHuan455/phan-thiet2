import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import {
  AddressItemProps,
  GoogleMap,
  GoogleMapProps,
  InfoAddress,
  PositionMarker,
} from './component';

import Container from 'common/Container';

export interface ContactMapProps extends GoogleMapProps {
  title?: string;
  headQuarterIdx?: number;
  defaultPosition?: PositionMarker;
  handleChangeHeaquarter?: (item: AddressItemProps, idx: number) => void;
  handleLoadMore?: () => void
}

const ContactMap: React.FC<ContactMapProps> = ({
  list,
  title,
  headQuarterIdx,
  defaultPosition,
  handleChangeHeaquarter,
  handleLoadMore,
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
              headQuarterIdx={headQuarterIdx}
              onClick={(item, idx) => {
                if (handleChangeHeaquarter) {
                  handleChangeHeaquarter(item, idx);
                }
                setZoomPosition(item?.position);
              }}
              handleLoadMore={handleLoadMore}
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

};

export default ContactMap;
