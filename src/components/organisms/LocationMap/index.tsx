import React from 'react';

import imgMap from 'assets/images/image_map.svg';
import MarkerCard, { MarkerCardProps } from 'components/molecules/MarkerCard';

export interface DivisionTypes extends MarkerCardProps{
  x: number;
  y: number;
}
interface LocationMapProps {
  listDivision: DivisionTypes[];
  active?: number;
  handleLeave?: () => void;
  handleHover?: (id: number) => void;
}

const LocationMap: React.FC<LocationMapProps> = ({
  listDivision,
  active,
  handleHover,
  handleLeave,
}) => (
  <div className="t-projectMap">
    <div className="t-projectMap_map">
      <svg width="100%" height="100%" viewBox="0 0 1127 656" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <image id="image1" width="100%" height="100%" xlinkHref={imgMap} />
      </svg>
      {
              listDivision?.map((item, index) => (
                <div
                  key={`t-projectMap_listDivision-${index.toString()}`}
                  className="t-projectMap_listDivision-item"
                  style={{
                    top: `calc(${item.y} / 656 * 100%)`,
                    left: `calc(${item.x} / 1126 * 100%)`,
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
};

export default LocationMap;
