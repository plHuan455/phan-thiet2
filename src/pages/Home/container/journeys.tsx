import React from 'react';

import dataJourneys from 'assets/dataDummy/journeys';
import JourneysTemplate from 'components/templates/Journeys';
import { getBlockData } from 'utils/functions';

interface JourneysProps{
  titleSection: string,
}

const Journeys: React.FC<SectionBlocks> = ({ blocks }) => {
  const journeysBlocks = getBlockData<JourneysProps>('experience_secondhome', blocks);
  return (
    <section>
      <JourneysTemplate
        title={journeysBlocks?.titleSection}
        titleField="Các mẫu nhà"
        {...dataJourneys}
      />
    </section>
  );
};

export default Journeys;
