import React from 'react';

import BoxDivision, { BoxDivisionProps } from './boxDivision';
import Boutique from './components/boutique';
import FestivalStreet from './components/festivalStreet';
import FestivalTown from './components/festivalTown';
import FloridaFirst from './components/floridaFirst';
import FloridaSecond from './components/floridaSecond';
import Kingdom from './components/kingdom';
import OceanResidence from './components/oceanResidence';
import PgaGolf from './components/pgaGolf';
import Santa from './components/santa';
import Waikiki from './components/waikiki';

import bg from 'assets/images/divisionLocation/bg.jpg';
import Container from 'common/Container';
import Heading from 'components/atoms/Heading';

interface DivisionLocationProps extends BoxDivisionProps {
  title?: string;
  color?: string;
}

const DivisionLocation: React.FC<DivisionLocationProps> = ({
  titleBox,
  contentBox,
  title,
  color,
}) => (
  <div className="t-divisionLocation">
    <Container>
      <div style={{ color }}>
        <Heading type="h2" modifiers={['inherit', 's015', 'uppercase']} content={title} />
      </div>
    </Container>
    <div className="t-divisionLocation_wrapContent u-mt-30 u-mt-md-56">
      <div className="t-divisionLocation_map">
        <img className="t-divisionLocation_bg" src={bg} loading="lazy" alt="bg" />
        <FloridaSecond.ImageShine />
        <FestivalStreet.ImageShine />
        <FestivalTown.ImageShine />
        <PgaGolf.ImageShine />
        <FloridaFirst.ImageShine />
        <Santa.ImageShine />
        <Waikiki.ImageShine />
        <Boutique.ImageShine />
        <OceanResidence.ImageShine />
        <Kingdom.ImageShine />
        <div className="t-divisionLocation_svg">
          <svg width="100%" height="100%" viewBox="0 0 1366 780" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <FloridaSecond.Line />
            <FestivalStreet.Line />
            <FestivalTown.Line />
            <PgaGolf.Line />
            <FloridaFirst.Line />
            <Santa.Line />
            <Waikiki.Line />
            <Boutique.Line />
            <OceanResidence.Line />
            <Kingdom.Line />
          </svg>
        </div>
      </div>
      <div className="t-divisionLocation_box active" style={{ color }}>
        <BoxDivision
          titleBox={titleBox}
          contentBox={contentBox}
        />
      </div>
    </div>
  </div>
);

DivisionLocation.defaultProps = {
  title: undefined,
  color: undefined,
};

export default DivisionLocation;
