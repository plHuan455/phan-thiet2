import React, { useState } from 'react';

import imgMap from 'assets/images/divisionUtilities/bg.png';
import Container from 'common/Container';
import Title from 'components/molecules/Title';
import MarkerCard, { MarkerCardProps } from 'components/organisms/LocationMap/component';
import mapModifiers from 'utils/functions';

interface LocationsItemTypes extends MarkerCardProps{
  x: number;
  y: number;
}

interface DivisionUtilitiesProps {
  title?: string
  listLocations?: LocationsItemTypes[]
}

const WIDTH_IMAGE = 931;
const HEIGHT_IMAGE = 752;

const DivisionUtilities: React.FC<DivisionUtilitiesProps> = ({
  title,
  listLocations,
}) => {
  const [active, setActive] = useState<number | undefined>(undefined);
  return (
    <div className="t-divisionUtilities">
      <Container>
        <div className="t-divisionUtilities_title">
          <Title type="h2" modifiers={['seaBlue', 's015', '400']} content={title} />
        </div>
        <div className="t-divisionUtilities_map u-mt-41">
          <div className="t-divisionUtilities_image" style={{ paddingBottom: `calc(${HEIGHT_IMAGE} / ${WIDTH_IMAGE}  * 100%)` }}>
            <img src={imgMap} alt="location-map" loading="lazy" />
          </div>
          {
            listLocations?.map((item, index) => (
              <div
                key={`t-divisionUtilities_listDivision-${index.toString()}`}
                className={mapModifiers('t-divisionUtilities_listDivision-item', active === item.id && 'active')}
                style={{
                  top: `calc(${item.y} / ${HEIGHT_IMAGE} * 100%)`,
                  left: `calc(${item.x} / ${WIDTH_IMAGE} * 100%)`,
                }}
              >
                <MarkerCard
                  handleHover={() => setActive(item.id)}
                  handleLeave={() => setActive(undefined)}
                  active={active === item.id}
                  modifiers="utilities"
                  key={index.toString()}
                  imgSrc={item.imgSrc}
                  id={item.id}
                  title={item.title}
                  utilitiesIcon={item.utilitiesIcon}
                />
              </div>
            ))
          }
        </div>
      </Container>
    </div>
  );
};

DivisionUtilities.defaultProps = {
  title: '',
  listLocations: [],
};

export default DivisionUtilities;
