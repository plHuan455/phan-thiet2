import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';

export interface CollectionSingleProps {
  title: string;
  titleCard?: string;
  description?: string;
  button?: LinkTypes;
  thumbnail?: string;
}

const CollectionSingle: React.FC<CollectionSingleProps> = ({
  title, button, thumbnail, description, titleCard,
}) => (
  <div className="m-collectionSingle">
    <Heading type="h2" modifiers={['400', 'inherit', 's015', 'uppercase']} content={title} />
    <Row className="justify-content-between u-mt-16 u-mt-lg-32">
      <Col lg={5}>
        <Text modifiers={['16x28', '400', 'raisinBlack']} content={description} />
      </Col>
      <Col lg={6} className="u-mt-8 u-mt-lg-0">
        <Image src={thumbnail} alt={titleCard} ratio="546x308" />
        <div className="u-mt-8 d-flex justify-content-between align-items-center">
          <Text modifiers={['24x36', '400', 'inherit', 's015']} content={titleCard} />
          <Link href={button?.url}>
            <Button variant="inherit">{button?.text}</Button>
          </Link>
        </div>
      </Col>
    </Row>
  </div>
);

CollectionSingle.defaultProps = {
};

export default CollectionSingle;
