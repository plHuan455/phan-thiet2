import React from 'react';

import Container from 'common/Container';
import Heading from 'components/atoms/Heading';
import { CardLayerProps } from 'components/organisms/Card/Layer';
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
  data?: CardLayerProps[]
  handleClick?: (slug?: string) => void;
}

const DivisionJourneys: React.FC<DivisionJourneysProps> = ({
  srcBg,
  title,
  tabs,
  slugActive,
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
        <div className="t-divisionJourneys_panel u-mt-32" />
      </div>
    </Container>
  </div>
);

DivisionJourneys.defaultProps = {
};

export default DivisionJourneys;
