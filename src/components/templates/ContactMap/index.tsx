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
  loading?: boolean;
  onClick?: (item: AddressItemProps, idx: number) => void;
  onLoadMore?: () => void
}

const ContactMap: React.FC<ContactMapProps> = ({
  list,
  title,
  headQuarterIdx,
  defaultPosition,
  loading,
  onClick,
  onLoadMore,
  ...props
}) => {
  const [zoomPosition, setZoomPosition] = useState<PositionMarker>();
  return (
    <div className="t-contactMap u-pt-lg-80 u-pt-md-60 u-pt-40 u-pb-lg-40 u-pb-md-30 u-pb-20">
      <Container>
        <Row className="u-ml-negative-16 u-mr-negative-16">
          <Col lg={6} className="t-contactMap_left u-pl-16 u-pr-16">
            <InfoAddress
              title={title}
              list={list}
              headQuarterIdx={headQuarterIdx}
              loading={loading}
              onClick={(item, idx) => {
                if (onClick) {
                  onClick(item, idx);
                }
                setZoomPosition(item?.position);
              }}
              onLoadMore={onLoadMore}
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
