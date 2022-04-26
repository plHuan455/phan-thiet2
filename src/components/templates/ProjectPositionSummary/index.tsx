import React, { useCallback, useEffect, useState } from 'react';

import bgLeft from 'assets/images/projectPosition/summary/bg_left.png';
import bgRight from 'assets/images/projectPosition/summary/bg_right.png';
import Container from 'common/Container';
import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import PullDown, { OptionType } from 'components/molecules/PullDown';
import Animate from 'components/organisms/Animate';
import LocationMap, { DivisionTypes } from 'components/organisms/LocationMap';

interface ProjectPositionSummaryProps {
  title?: string
  optionsDivision?: OptionType[];
  valueDivision?: OptionType;
  listDivision?: DivisionTypes[];
  placeholderPulldown?: string;
  handleSelected?: (option?: OptionType) => void;
}

const ProjectPositionSummary: React.FC<ProjectPositionSummaryProps> = ({
  title,
  optionsDivision,
  valueDivision,
  listDivision,
  placeholderPulldown,
  handleSelected,
}) => {
  const [active, setActive] = useState<number>();

  const handleLeave = useCallback(() => {
    if (valueDivision) {
      setActive(Number(valueDivision.value));
    } else {
      setActive(undefined);
    }
  }, [valueDivision]);

  useEffect(() => {
    if (valueDivision) {
      setActive(Number(valueDivision.value));
    }
  }, [valueDivision]);

  return (
    <div className="t-projectPositionSummary u-pt-md-80 u-pt-48">
      {/** TODO: Add animation later */}
      <div className="t-projectPositionSummary_bgLeft">
        <Image src={bgLeft} ratio="1x1" size="contain" />
      </div>
      {/** TODO: Add animation later */}
      <div className="t-projectPositionSummary_bgRight">
        <Image src={bgRight} ratio="1x1" />
      </div>
      <Container>
        <div className="t-projectPositionSummary_title">
          <Heading type="h4" modifiers={['700', 'gradientGreen', 'center']} content={title} />
        </div>
        <Animate type="fadeInUp">
          <div className="t-projectPositionSummary_pulldown">
            <PullDown
              variant="highLight"
              value={valueDivision}
              options={optionsDivision || []}
              handleSelect={handleSelected}
              placeholder={placeholderPulldown}
            />
          </div>
          <div className="t-projectPositionSummary_map">
            <LocationMap
              listDivision={listDivision}
              active={active}
              handleHover={(id) => setActive(id)}
              handleLeave={handleLeave}
            />
          </div>
        </Animate>
      </Container>
    </div>
  );
};

ProjectPositionSummary.defaultProps = {
  optionsDivision: [],
  valueDivision: undefined,
  handleSelected: undefined,
  placeholderPulldown: undefined,
  listDivision: undefined,
  title: undefined,
};

export default ProjectPositionSummary;
