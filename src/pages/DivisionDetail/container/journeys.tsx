import React from 'react';

import divisionJourneysData from 'assets/dataDummy/divisionJourneys';
import DivisionJourneys from 'components/templates/DivisionJourneys';

const Journeys: React.FC = () => (
  <section>
    <DivisionJourneys
      {...divisionJourneysData}
      loading={false}
      textNotFound="Không tìm thấy dữ liệu"
      slugActive={divisionJourneysData.tabs[0].slug}
      handleClick={() => ''}
    />
  </section>
);

export default Journeys;
