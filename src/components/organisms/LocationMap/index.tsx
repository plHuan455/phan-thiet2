import React from 'react';

import MarkerCard, { MarkerCardProps } from './component';

import imgMap from 'assets/images/image_map.png';

export interface DivisionTypes extends MarkerCardProps{
  x: number;
  y: number;
}
interface LocationMapProps {
  listDivision?: DivisionTypes[];
  active?: number;
  handleLeave?: () => void;
  handleHover?: (id: number) => void;
}

const WIDTH_IMAGE = 1126;
const HEIGHT_IMAGE = 656;

const LocationMap: React.FC<LocationMapProps> = ({
  listDivision,
  active,
  handleHover,
  handleLeave,
}) => (
  <div className="t-projectMap">
    <div className="t-projectMap_map">
      <div className="t-projectMap_image" style={{ paddingBottom: `calc(${HEIGHT_IMAGE} / ${WIDTH_IMAGE}  * 100%)` }}>
        <img src={imgMap} alt="location-map" loading="lazy" />
      </div>
      {
        listDivision?.map((item, index) => (
          <div
            key={`t-projectMap_listDivision-${index.toString()}`}
            className="t-projectMap_listDivision-item"
            style={{
              top: `calc(${item.y} / ${HEIGHT_IMAGE} * 100%)`,
              left: `calc(${item.x} / ${WIDTH_IMAGE} * 100%)`,
            }}
          >
            <MarkerCard
              imgSrc={item.imgSrc}
              title={item.title}
              handleHover={() => handleHover && handleHover(item.id || 0)}
              handleLeave={handleLeave}
              active={active === item.id}
            />
          </div>
        ))
      }
    </div>
  </div>
);

LocationMap.defaultProps = {
  active: undefined,
  handleHover: undefined,
  handleLeave: undefined,
  listDivision: undefined,
};

export default LocationMap;
