import React, { useMemo } from 'react';

import { listDivisionDummy } from 'assets/dataDummy/projectMap';
import ProjectPositionHome from 'components/templates/ProjectPositionHome';
import { baseString, getBlockData } from 'utils/functions';

interface PositionItemProps {
  number: string;
  titleSub: string;
  unit: string;
}
interface PositionProps{
  item1: PositionItemProps,
  item2: PositionItemProps,
  item3: PositionItemProps
}

const Position: React.FC<SectionBlocks> = ({ blocks }) => {
  const positionBlockContent = useMemo(() => {
    const utilitiesContent = getBlockData<PositionProps>('map_subdivision', blocks);
    const data = [
      utilitiesContent?.item1,
      utilitiesContent?.item2,
      utilitiesContent?.item3,
    ];
    return data && data.map((val) => ({
      label: baseString(val?.titleSub),
      value: `${val?.number} ${val?.unit}`,
    }));
  }, [blocks]);

  return (
    <ProjectPositionHome
      listDivision={listDivisionDummy}
      scale={positionBlockContent[0]}
      investment={positionBlockContent[1]}
      utility={positionBlockContent[2]}
    />
  );
};

export default Position;
