import React, { useMemo } from 'react';

import UtilitiesTemplate from 'components/templates/UtilityHome';
import { baseURL, getBlockData } from 'utils/functions';

interface UtilitiesItemProps {
  description?: string;
  image?: string;
  title?: string;
}
interface UtilitiesProps {
  titleSection: string;
  items?: UtilitiesItemProps[];
}

const Utilities: React.FC<SectionBlocks> = ({ blocks }) => {
  const UtilitiesBlockData = getBlockData<UtilitiesProps>('great_utility', blocks);

  const utilitiesBlockContent = useMemo(() => (
    UtilitiesBlockData?.items?.map((val) => ({
      description: val.description,
      thumbnail: baseURL(val.image),
      title: val.title,
    }))
  ), [UtilitiesBlockData]);

  return (
    <UtilitiesTemplate
      title={UtilitiesBlockData?.titleSection}
      listUtilities={utilitiesBlockContent}
    />
  );
};
export default Utilities;
