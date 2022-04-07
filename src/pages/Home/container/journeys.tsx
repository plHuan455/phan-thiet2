import React from 'react';

import dataJourneys from 'assets/dataDummy/journeys';
import JourneysTemplate from 'components/templates/Journeys';

const Journeys: React.FC = () => (
  <section>
    <JourneysTemplate
      title="HÀNH TRÌNH TRẢI NGHIỆM SECOND HOME"
      titleField="Các mẫu nhà"
      {...dataJourneys}
    />
  </section>
);

export default Journeys;
