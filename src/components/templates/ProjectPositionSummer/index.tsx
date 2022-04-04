import React, { useCallback, useEffect, useState } from 'react';

import bgLeft from 'assets/images/projectPositionSummer/bg_left.png';
import bgRight from 'assets/images/projectPositionSummer/bg_right.png';
import Container from 'common/Container';
import Image from 'components/atoms/Image';
import PullDown, { OptionType } from 'components/molecules/PullDown';
import Title from 'components/molecules/Title';
import LocationMap, { DivisionTypes } from 'components/organisms/LocationMap';

interface ProjectPositionSummerProps {
  title?: string
  optionsDivision?: OptionType[];
  valueDivision?: OptionType;
  listDivision?: DivisionTypes[];
  placeholderPulldown?: string;
  handleSelected?: (option?: OptionType) => void;
}

const ProjectPositionSummer: React.FC<ProjectPositionSummerProps> = ({
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
    <div className="t-projectPositionSummer">
      {/** TODO: Add animation later */}
      <div className="t-projectPositionSummer_bgLeft">
        <Image src={bgLeft} ratio="1x1" size="contain" />
      </div>
      {/** TODO: Add animation later */}
      <div className="t-projectPositionSummer_bgRight">
        <Image src={bgRight} ratio="1x1" />
      </div>
      <Container>
        <div className="t-projectPositionSummer_title">
          <Title type="h4" modifiers={['700', 'gradientGreen', 'center']} content={title} />
        </div>
        <div className="t-projectPositionSummer_pulldown">
          <PullDown
            variant="highLight"
            value={valueDivision}
            options={optionsDivision || []}
            handleSelect={handleSelected}
            placeholder={placeholderPulldown}
          />
        </div>
        <div className="t-projectPositionSummer_map">
          <LocationMap
            listDivision={listDivision}
            active={active}
            handleHover={(id) => setActive(id)}
            handleLeave={handleLeave}
          />
        </div>
      </Container>
    </div>
  );
};

ProjectPositionSummer.defaultProps = {
  optionsDivision: [],
  valueDivision: undefined,
  handleSelected: undefined,
  placeholderPulldown: undefined,
  listDivision: undefined,
  title: undefined,
};

export default ProjectPositionSummer;
