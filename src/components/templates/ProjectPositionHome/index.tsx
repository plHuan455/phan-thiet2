import React, { useState } from 'react';

import bgLeft from 'assets/images/projectPositionHome/bg_left.png';
import bgRight from 'assets/images/projectPositionHome/bg_right.png';
import Container from 'common/Container';
import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import LocationMap, { DivisionTypes } from 'components/organisms/LocationMap';

interface InfoTypes {
  label: string
  value: string
}

interface ProjectPositionHomeProps {
  listDivision?: DivisionTypes[];
  scale?: InfoTypes;
  investment?: InfoTypes;
  utility?: InfoTypes;
}

const ProjectPositionHome: React.FC<ProjectPositionHomeProps> = ({
  listDivision, scale, investment, utility,
}) => {
  const [active, setActive] = useState<number>();
  return (
    <div className="t-projectPositionHome">
      {/** TODO: Add animation later */}
      <div className="t-projectPositionHome_bgLeft">
        <Image src={bgLeft} ratio="1x1" />
      </div>
      {/** TODO: Add animation later */}
      <div className="t-projectPositionHome_bgRight">
        <Image src={bgRight} ratio="1x1" />
      </div>
      <Container>
        <div className="t-projectPositionHome_map">
          <LocationMap
            listDivision={listDivision}
            active={active}
            handleHover={(id) => setActive(id)}
            handleLeave={() => setActive(undefined)}
          />
          <div className="t-projectPositionHome_info">
            <div className="t-projectPositionHome_scale">
              <Text modifiers={['20x32', '400', 'copper', 'uppercase']} content={scale?.label} />
              <div className="u-mt-8" />
              <Heading type="h1" modifiers={['700', 'gradientGreen', 'uppercase']} content={scale?.value} />
            </div>
            <div className="t-projectPositionHome_wrap">
              <div className="t-projectPositionHome_investment">
                <Text modifiers={['20x32', '400', 'copper', 'uppercase']} content={investment?.label} />
                <div className="u-mt-8" />
                <Heading type="h2" modifiers={['700', 'gradientGreen', 'uppercase']} content={investment?.value} />
              </div>
              <div className="t-projectPositionHome_utility">
                <Text modifiers={['20x32', '400', 'copper', 'uppercase']} content={utility?.label} />
                <div className="u-mt-8" />
                <Heading type="h2" modifiers={['700', 'gradientGreen', 'uppercase']} content={utility?.value} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

ProjectPositionHome.defaultProps = {
  scale: undefined,
  investment: undefined,
  utility: undefined,
  listDivision: undefined,
};

export default ProjectPositionHome;
