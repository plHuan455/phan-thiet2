import React, { useEffect, useState } from 'react';

import bgLeft from 'assets/images/projectPositionSummer/bg_left.png';
import bgRight from 'assets/images/projectPositionSummer/bg_right.png';
import Container from 'common/Container';
import Image from 'components/atoms/Image';
import PullDown, { OptionType } from 'components/molecules/PullDown';
import Title from 'components/molecules/Title';
import LocationMap, { DivisionTypes } from 'components/organisms/LocationMap';

interface ProjectPositionSummerProps {
  title: string
  optionsDivision?: OptionType[];
  valueDivision?: OptionType;
  listDivision: DivisionTypes[];
  handleSelected?: (option: OptionType | undefined) => void;
}

const ProjectPositionSummer: React.FC<ProjectPositionSummerProps> = ({
  title,
  optionsDivision,
  valueDivision,
  listDivision,
  handleSelected,
}) => {
  const [active, setActive] = useState<number | undefined>();

  const handleLeave = () => {
    if (valueDivision) {
      setActive(Number(valueDivision.value));
    } else {
      setActive(undefined);
    }
  };

  useEffect(() => {
    if (valueDivision) {
      setActive(Number(valueDivision.value));
    }
  }, [valueDivision]);
  return (
    <div className="t-projectPositionSummer">
      <div className="t-projectPositionSummer_bgLeft">
        <Image src={bgLeft} ratio="269x314" />
      </div>
      <div className="t-projectPositionSummer_bgRight">
        <Image src={bgRight} ratio="269x314" />
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
          // TODO: Translation
            placeholder="Chọn phân khu"
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
};

export default ProjectPositionSummer;
