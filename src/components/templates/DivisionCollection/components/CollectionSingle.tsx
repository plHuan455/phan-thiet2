import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Animate from 'components/organisms/Animate';

export interface CollectionSingleProps {
  title: string;
  titleCard?: string;
  description?: string;
  button?: LinkTypes;
  thumbnail?: string;
  color?: string;
  handleClick?: () => void;
}

const CollectionSingle: React.FC<CollectionSingleProps> = ({
  title, button, thumbnail, description, titleCard, color, handleClick,
}) => (
  <div className="m-collectionSingle">
    <Heading type="h2" modifiers={['400', 'inherit', 's015', 'uppercase']} content={title} />
    <Row className="justify-content-between u-mt-16 u-mt-lg-32">
      <Col lg={5}>
        <Text modifiers={['16x28', '400', 'raisinBlack']} content={description} />
      </Col>
      <Col lg={6} className="u-mt-8 u-mt-lg-0">
        <Animate type="fadeInUp">
          <Image src={thumbnail} alt={titleCard} ratio="546x308" />
          <div className="u-mt-8 d-sm-flex justify-content-sm-between align-items-sm-center" style={{ color }}>
            <Heading type="h6" modifiers={['400', 'inherit', 's015']} content={titleCard} />
            <div className="u-mt-16 u-mt-sm-0 d-block">
              <Button variant="inherit" onClick={handleClick}>{button?.text}</Button>
            </div>
          </div>
        </Animate>
      </Col>
    </Row>
  </div>
);

CollectionSingle.defaultProps = {
};

export default CollectionSingle;
