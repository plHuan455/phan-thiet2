import React from 'react';

import Container from 'common/Container';
import FlatList from 'common/FlatList';
import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Text from 'components/atoms/Text';
import Card from 'components/organisms/Card';
import { CardLayerProps } from 'components/organisms/Card/Layer';
import { NextArrow, PrevArrow } from 'components/organisms/Carousel';
import Tabs, { Tab } from 'components/organisms/Tabs';

export type LabelJourneys = {
  slug?: string;
  label?: string;
}

export interface DivisionJourneysProps {
  srcBg?: string;
  title?: string;
  tabs?: LabelJourneys[];
  slugActive?: string;
  data?: CardLayerProps[];
  loading?: boolean;
  textNotFound?: string;
  handleClick?: (slug?: string) => void;
}

const DivisionJourneys: React.FC<DivisionJourneysProps> = ({
  srcBg,
  title,
  tabs,
  slugActive,
  data,
  loading,
  textNotFound,
  handleClick,
}) => (
  <div className="t-divisionJourneys">
    <img className="t-divisionJourneys_bg" src={srcBg} alt="background" />
    <Container>
      <div className="t-divisionJourneys_content">
        <Heading type="h2" modifiers={['700', 'white', 's015']} content={title} />
        <div className="t-divisionJourneys_tabs u-mt-30 u-mt-md-56">
          <Tabs variableMutate={slugActive}>
            {tabs?.map((item, index) => (
              <Tab
                key={`tab-${index.toString()}`}
                label={item.label}
                active={item.slug === slugActive}
                handleClick={() => handleClick && handleClick(item.slug)}
              />
            ))}
          </Tabs>
        </div>
        <div className="t-divisionJourneys_panel u-mt-32">
          {loading && (
            <div className="u-pt-50 u-pb-50 d-flex justify-content-center">
              <Icon iconName="loadingWhite" />
            </div>
          )}
          {!loading && !data?.length && (
            <div className="u-pt-50 u-pb-50">
              <Text modifiers={['white', 'center']}>{textNotFound}</Text>
            </div>
          )}
          {!loading && (
          <FlatList
            innerDots
            settings={{
              prevArrow: <PrevArrow customArrow="circleWhite" />,
              nextArrow: <NextArrow customArrow="circleWhite" />,
              dots: true,
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
