import React from 'react';

import Container from 'common/Container';
import FlatList from 'common/FlatList';
import Heading from 'components/atoms/Heading';
import Text from 'components/atoms/Text';
import Card from 'components/organisms/Card';
import { CardLayerProps } from 'components/organisms/Card/Layer';
import { NextArrow, PrevArrow } from 'components/organisms/Carousel';
import Tabs, { Tab } from 'components/organisms/Tabs';

export interface DivisionJourneysProps {
  srcBg?: string;
  title?: string;
  data?: CardLayerProps[];
  textNotFound?: string;
  tabs?: {
    name?: string;
    id?: number;
  }[];
  idActive?: number;
  handleClick?: (id?: number) => void;
  handleClickCard?: (index?: number) => void;
}

const DivisionJourneys: React.FC<DivisionJourneysProps> = ({
  srcBg,
  title,
  data,
  textNotFound,
  tabs,
  idActive,
  handleClick,
  handleClickCard,
}) => (
  <div className="t-divisionJourneys">
    <img className="t-divisionJourneys_bg" src={srcBg} alt="background" />
    <Container>
      <div className="t-divisionJourneys_content">
        <Heading type="h2" modifiers={['400', 'white', 's015']} content={title} />
        {tabs && tabs.length > 0 && (
        <div className="t-divisionJourneys_tabs u-mt-30 u-mt-md-56">
          <Tabs variableMutate={idActive}>
            {tabs?.map((item, index) => (
              <Tab
                key={`tab-${index.toString()}`}
                label={item.name}
                active={item.id === idActive}
                handleClick={() => handleClick && handleClick(item.id)}
              />
            ))}
          </Tabs>
        </div>
        )}
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
            render={(item, index) => (
              <Card.Layer
                {...item}
                ratio="354x221"
                isBold
                modifiers={['filter', 'hover', 'r15', 'pd-24x16']}
                handleClick={() => handleClickCard && handleClickCard(index)}
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
