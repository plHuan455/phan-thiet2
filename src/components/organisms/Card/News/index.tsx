import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';

export interface CardNewsProps {
  thumbnail?: string;
  dateTime?: string
  title?: string;
  description?: string;
  button?: LinkTypes;
  tag?: string;
}

const CardNews: React.FC<CardNewsProps> = ({
  thumbnail,
  dateTime,
  title,
  description,
  button,
  tag,
}) => (
  <div className="o-cardNews">
    <Row className="u-mr-negative-16 u-ml-negative-16">
      <Col lg={6} className="u-pl-16 u-pr-16">
        <Link href={button?.url} target={button?.target}>
          <div className="o-cardNews_thumbnail">
            <Image src={thumbnail} alt={title} ratio="547x309" />
          </div>
        </Link>
      </Col>
      <Col lg={6} className="align-self-center u-pl-16 u-pr-16">
        <div className="o-cardNews_content">
          <div className="d-flex align-items-center">
            <Text modifiers={['400', '12x20', 'davyGrey']} content={dateTime} />
            {tag && (
            <>
              <Icon iconName="dot" size="16" />
              <Text
                modifiers={['400', '14x20', 'gradientGreen']}
                content={tag}
              />
            </>
            )}
          </div>
          <Link href={button?.url} target={button?.target}>
            <div className="o-cardNews_title u-mt-8 u-mt-md-16">
              <Heading type="h6" modifiers={['700', 's015', 'raisinBlack']} content={title} />
            </div>
          </Link>
          <div className="o-cardNews_desc u-mt-8 u-mt-md-16">
            <Text modifiers={['400', '16x28', 'davyGrey']} content={description} />
          </div>
          <Link href={button?.url} target={button?.target}>
            <div className="d-flex align-items-center u-mt-15 u-mt-md-30 animate animate-arrowSlide">
              <Text modifiers={['copper', '14x20', '400']} content={button?.text} />
              <div className="o-cardNews_button-icon u-ml-8">
                <Icon iconName="arrowRightCopper" size="16" />
              </div>
            </div>
          </Link>
        </div>
      </Col>
    </Row>
  </div>
);

export default React.memo(CardNews);
