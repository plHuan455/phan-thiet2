import React from 'react';

import divisionJourneysData from 'assets/dataDummy/divisionJourneys';
import DivisionJourneys, { DivisionJourneysProps } from 'components/templates/DivisionJourneys';

interface JourneysProps extends DivisionJourneysProps {}

const Journeys: React.FC<JourneysProps> = (props) => (
  <section>
    <DivisionJourneys
      {...divisionJourneysData}
      loading={false}
      textNotFound="Không tìm thấy dữ liệu"
      {...props}
    />
  </section>
);

export default Journeys;
