import React, { useMemo, useRef } from 'react';

import BoxDivision, { BoxDivisionProps } from './boxDivision';
import mapData from './constants';

import bg from 'assets/images/divisionLocation/bg.jpg';
import Container from 'common/Container';
import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Animate from 'components/organisms/Animate';
import useScrollAnimate from 'hooks/useScrollAnimation';

export type TypeDivision =
  | 'boutique-hotel'
  | 'festival-street'
  | 'festival-town'
  | 'florida'
  | 'the-kingdom'
  | 'ocean-residence'
  | 'pga-golf-villas'
  | 'santa-monica'
  | 'waikiki';

interface DivisionLocationProps extends BoxDivisionProps {
  title?: string;
  type?: TypeDivision;
}

const DivisionLocation: React.FC<DivisionLocationProps> = ({
  titleBox,
  contentBox,
  title,
  type,
}) => {
  const ref = useRef<HTMLDivElement|null>(null);
  const isScroll = useScrollAnimate(ref, 3);

  const bgDivision = useMemo(() => {
    const indexOf = mapData.findIndex((e) => e.className === type);
    if (indexOf > -1 && mapData[indexOf].bg) {
      return mapData[indexOf].bg;
    }
    return bg;
  }, [type]);

  return (
    <div
      ref={ref}
      className="t-divisionLocation"
    >
      <Container>
        <Heading type="h2" modifiers={['inherit', 's015', 'uppercase']} content={title} />
      </Container>
      <Animate type="fadeInUp" extendClassName="t-divisionLocation_wrapContent u-mt-30 u-mt-md-56">
        <div className="t-divisionLocation_map">
          <img className="t-divisionLocation_bg" src={bgDivision} loading="lazy" alt="bg" />
          {mapData.map((item, index) => (
            <div
              key={`image-${index.toString()}`}
              className={`division-image ${item.className} ${isScroll && type === item.className ? 'active' : ''}`}
            >
              <Image src={item.img} alt={item.className} />
            </div>
          ))}
          <div className="t-divisionLocation_svg">
            <svg width="100%" height="100%" viewBox="0 0 1366 780" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              {mapData.map((item, index) => (
                <path
                  key={`line-${index.toString()}`}
                  className={`division-line ${isScroll && type === item.className ? 'active' : ''}`}
                  d={item.line}
                  stroke="#FFFEF8"
                  strokeWidth="6"
                />
              ))}
            </svg>
          </div>
        </div>
        <div className={`t-divisionLocation_box ${isScroll ? 'active' : ''}`}>
          <BoxDivision
            titleBox={titleBox}
            contentBox={contentBox}
          />
        </div>
      </Animate>
    </div>
  );
};

DivisionLocation.defaultProps = {
  title: undefined,
  type: undefined,
};

export default DivisionLocation;
