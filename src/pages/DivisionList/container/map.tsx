import React, { useMemo, useState } from 'react';

import { listDivisionDummy, optionDummy } from 'assets/dataDummy/projectMap';
import { OptionType } from 'components/molecules/PullDown';
import ProjectPositionSummary from 'components/templates/ProjectPositionSummary';
import { baseString, getBlockData } from 'utils/functions';

interface MapProps {
  title: string;
  placeholder: string;
}
const Map: React.FC<SectionBlocks> = ({ blocks }) => {
  const [selected, setSelected] = useState<OptionType | undefined>(optionDummy[0]);
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

  return (
    <section className="u-mt-md-40 u-mt-16">
      <ProjectPositionSummary
        optionsDivision={optionDummy}
        title={blockContent?.title}
        listDivision={listDivisionDummy}
        valueDivision={selected}
        handleSelected={(option) => setSelected(option)}
        placeholderPulldown={blockContent?.placeholder}
      />
    </section>
  );
};

export default Map;
