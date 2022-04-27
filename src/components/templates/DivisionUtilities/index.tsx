import React, { useRef, useState } from 'react';

import Container from 'common/Container';
import Heading from 'components/atoms/Heading';
import Animate from 'components/organisms/Animate';
import MarkerCard, { MarkerCardProps } from 'components/organisms/LocationMap/component';
import useScrollAnimate from 'hooks/useScrollAnimation';

interface LocationsItemTypes extends MarkerCardProps{
  x: number;
  y: number;
}

interface DivisionUtilitiesProps {
  title?: string;
  listLocations?: LocationsItemTypes[];
  background: string;
  widthImage?: number;
  heightImage?: number;
}

const DivisionUtilities: React.FC<DivisionUtilitiesProps> = ({
  title,
  listLocations,
  background,
  heightImage,
  widthImage,
}) => {
  const [active, setActive] = useState<number | undefined>(undefined);
  const refUtilitiesMap = useRef<HTMLDivElement>(null);
  const animate = useScrollAnimate(refUtilitiesMap);

  return (
    <div className="t-divisionUtilities">
      <Container>
        <div ref={refUtilitiesMap} className="t-divisionUtilities_title">
          <Heading type="h2" modifiers={['inherit', 's015', '400']} content={title} />
        </div>
        <Animate type="fadeInUp" extendClassName="t-divisionUtilities_map u-mt-41">
          <div className="t-divisionUtilities_image" style={{ paddingBottom: heightImage && widthImage ? `calc(${heightImage / widthImage}  * 100%)` : '0%' }}>
            <img src={background} alt="location-map" loading="lazy" />
          </div>
          {
            listLocations?.map((item, index) => (
              <div
                key={`t-divisionUtilities_listDivision-${index.toString()}`}
                className={`t-divisionUtilities_item ${animate && 'animate animate-dropdown'} 
                ${active === item.id && 't-divisionUtilities_item-active'}`}
                style={{
                  top: `calc(${item.y} / ${heightImage} * 100% - 15px)`,
                  left: `calc(${item.x} / ${widthImage} * 100% - 15px)`,
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
        </Animate>
      </Container>
    </div>
  );
};

DivisionUtilities.defaultProps = {
  title: '',
  listLocations: [],
  heightImage: 752,
  widthImage: 931,
};

export default DivisionUtilities;
