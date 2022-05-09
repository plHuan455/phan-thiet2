import React, {
  useEffect, useRef, useState,
} from 'react';

import useAnimation from './hooks/animation';

import bgLeft from 'assets/images/projectPosition/home/bg_left.png';
import bgRight from 'assets/images/projectPosition/home/bg_right.png';
import Container from 'common/Container';
import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Animate from 'components/organisms/Animate';
import LocationMap, { DivisionTypes } from 'components/organisms/LocationMap';
import useScrollAnimate from 'hooks/useScrollAnimation';
import { formatNumber } from 'utils/functions';

interface InfoTypes {
  label?: string
  value?: string
  unit?: string
}

interface ProjectPositionHomeProps {
  listDivision?: DivisionTypes[];
  scale?: InfoTypes;
  investment?: InfoTypes;
  utility?: InfoTypes;
  thumbnail?: string;
}

interface ContentProps extends InfoTypes {
  active?: boolean;
  isHighlight?: boolean;
}

const Content = React.memo<ContentProps>(({
  value = '',
  label,
  unit = '',
  active = false,
  isHighlight,
}) => {
  const { animated, countNumberAnimate } = useAnimation({
    countNumber: parseInt(value, 10),
    isActive: active,
  });

  return (
    <>
      <Text modifiers={['16x28', '400', 'copper', 'uppercase']} content={label} />
      <div className="u-mt-8" />
      <Heading type={isHighlight ? 'h2' : 'h4'} modifiers={['700', 'gradientGreen', 'uppercase']}>
        <animated.div className="o-cardIntro_title">
          {countNumberAnimate.number.to((i) => `${formatNumber(i)} ${unit}`)}
        </animated.div>
      </Heading>

    </>
  );
});

const ProjectPositionHome: React.FC<ProjectPositionHomeProps> = ({
  listDivision, scale, investment, utility, thumbnail,
}) => {
  const [active, setActive] = useState<number>();

  useEffect(() => {
    if (listDivision) {
      listDivision.forEach((item) => item.active && setActive(item.id));
    }
  }, [listDivision]);

  const refCount = useRef<HTMLDivElement>(null);
  const countActive = useScrollAnimate(refCount);

  return (
    <div ref={refCount} className="t-projectPositionHome">
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
          <Animate type="fadeInUp">
            <LocationMap
              listDivision={listDivision}
              active={active}
              handleHover={(id) => setActive(id)}
              thumbnail={thumbnail}
            />
          </Animate>
          <div className="t-projectPositionHome_info">
            <div className="t-projectPositionHome_scale">
              <Content active={countActive} {...scale} isHighlight />
            </div>
            <div className="t-projectPositionHome_wrap">
              <div className="t-projectPositionHome_investment">
                <Content active={countActive} {...investment} />
              </div>
              <div className="t-projectPositionHome_utility">
                <Content active={countActive} {...utility} />
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
  thumbnail: undefined,
};

export default ProjectPositionHome;
