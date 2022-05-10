import React, { useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import { OptionType } from 'components/molecules/PullDown';
import ProjectPositionSummary from 'components/templates/ProjectPositionSummary';
import { getSubDivisionMapListService } from 'services/subdivision';
import { baseString, getBlockData, baseURL } from 'utils/functions';

interface MapProps {
  title: string;
  placeholder: string;
}
const Map: React.FC<SectionBlocks> = ({ blocks }) => {
  const [selected, setSelected] = useState<OptionType | undefined>(undefined);
  const blockContent = useMemo(() => {
    const blockPageContent = getBlockData<MapProps>(
      'map',
      blocks,
    );
    return {
      title: baseString(blockPageContent?.title),
      placeholder: baseString(blockPageContent?.placeholder),
    };
  }, [blocks]);

  const { data: mapData } = useQuery(
    'getSubDivisionListMap', getSubDivisionMapListService,
  );

  const listLocation = useMemo(() => mapData?.items.map((item) => {
    if (item?.subdivision?.pinned) {
      setSelected({
        label: item?.subdivision?.name,
        value: item?.subdivisionId,
      });
    }
    return ({
      id: Number(item?.subdivisionId),
      imgSrc: baseURL(item?.subdivision?.thumbnail),
      title: item?.subdivision?.name,
      active: item?.subdivision?.pinned,
      y: Number(item?.point?.y),
      x: Number(item?.point?.x),
    });
  }), [mapData]);

  const listOptions = useMemo(() => mapData?.items?.map((item) => ({
    label: item?.subdivision.name,
    value: item?.subdivisionId,
  })), [mapData]);

  return (
    <section className="u-mt-md-40 u-mt-16">
      <ProjectPositionSummary
        optionsDivision={listOptions}
        title={blockContent?.title}
        listDivision={listLocation}
        valueDivision={selected}
        handleSelected={(option) => setSelected(option)}
        placeholderPulldown={blockContent?.placeholder}
      />
    </section>
  );
};

export default Map;
