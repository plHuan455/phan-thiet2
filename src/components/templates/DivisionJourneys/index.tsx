import React from 'react';

import Container from 'common/Container';
import FlatList from 'common/FlatList';
import Heading from 'components/atoms/Heading';
import Text from 'components/atoms/Text';
import Card from 'components/organisms/Card';
import { CardLayerProps } from 'components/organisms/Card/Layer';
import { NextArrow, PrevArrow } from 'components/organisms/Carousel';

export interface DivisionJourneysProps {
  srcBg?: string;
  title?: string;
  slugActive?: string;
  data?: CardLayerProps[];
  loading?: boolean;
  textNotFound?: string;
  handleClick?: (slug?: string) => void;
}

const DivisionJourneys: React.FC<DivisionJourneysProps> = ({
  srcBg,
  title,
  data,
  textNotFound,
}) => (
  <div className="t-divisionJourneys">
    <img className="t-divisionJourneys_bg" src={srcBg} alt="background" />
    <Container>
      <div className="t-divisionJourneys_content">
        <Heading type="h2" modifiers={['400', 'white', 's015']} content={title} />
        <div className="t-divisionJourneys_carousel u-mt-40">
          {!data?.length && (
            <div className="u-pt-50 u-pb-50">
              <Text modifiers={['white', 'center']}>{textNotFound}</Text>
            </div>
          )}
          {data?.length && (
          <FlatList
            innerDots
            settings={{
              prevArrow: <PrevArrow customArrow="circleWhite" />,
              nextArrow: <NextArrow customArrow="circleWhite" />,
              dots: true,
              rows: data.length > 3 ? 2 : 1,
              customPaging() {
                return (
                  <span className="o-carousel_dot circle" />
                );
              },
            }}
            data={data}
            render={(item) => (
              <Card.Layer
                {...item}
                isBold
                modifiers={['filter', 'hover', 'r15', 'pd-24x16']}
              />
            )}
          />
          )}
        </div>
      </div>
    </Container>
  </div>
);

DivisionJourneys.defaultProps = {
};

export default DivisionJourneys;
