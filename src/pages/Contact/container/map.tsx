import React from 'react';

import dummyContact from 'assets/dataDummy/contact';
import ContactMap from 'components/templates/ContactMap';

const Map: React.FC = () => (
  <>
    <ContactMap
      defaultPosition={dummyContact.list[0].position}
      {...dummyContact}
    />
  </>
);

export default Map;
