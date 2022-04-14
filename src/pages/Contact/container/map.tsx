import React, { useMemo } from 'react';

import dummyContact from 'assets/dataDummy/contact';
import ContactMap from 'components/templates/ContactMap';
import { getBlockData } from 'utils/functions';

interface MapProps {
  title: string
}

const Map: React.FC<SectionBlocks> = ({ blocks }) => {
  const mapBlock = useMemo(() => {
    const blockPageContent = getBlockData<MapProps>(
      'contact_headquarter',
      blocks,
    );
    return {
      title: blockPageContent?.title,
    };
  }, [blocks]);

  return (
    <ContactMap
      {...dummyContact}
      defaultPosition={dummyContact.list[0].position}
      title={mapBlock.title}
    />
  );
};

export default Map;
