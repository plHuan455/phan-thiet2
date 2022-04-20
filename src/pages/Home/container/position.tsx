import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

import ProjectPositionHome from 'components/templates/ProjectPositionHome';
import { getSubDivisionMapListService } from 'services/subdivision';
import { baseString, baseURL, getBlockData } from 'utils/functions';

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

  const { data: mapData } = useQuery(
    'getSubDivisionMapHome', getSubDivisionMapListService,
  );

  const listLocation = useMemo(() => mapData?.items.map((item) => ({
    id: Number(item.subdivisionId),
    imgSrc: baseURL(item.subdivision.thumbnail),
    title: item.subdivision.name,
    active: item.subdivision.pinned,
    y: Number(item.point.y),
    x: Number(item.point.x),
  })), [mapData]);

  return (
    <ProjectPositionHome
      listDivision={listLocation}
      scale={positionBlockContent[0]}
      investment={positionBlockContent[1]}
      utility={positionBlockContent[2]}
      thumbnail={baseURL(mapData?.image)}
    />
  );
};

export default Position;
