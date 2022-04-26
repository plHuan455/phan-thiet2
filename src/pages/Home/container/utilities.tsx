import React, { useMemo } from 'react';

import UtilitiesTemplate from 'components/templates/UtilityHome';
import { baseString, baseURL, getBlockData } from 'utils/functions';

interface UtilitiesItemProps {
  description?: string;
  image?: string;
  title?: string;
  thumbnail?: string;
}
interface UtilitiesProps {
  titleSection: string;
  items?: UtilitiesItemProps[];
}

const Utilities: React.FC<SectionBlocks> = ({ blocks }) => {
  const utilitiesBlockData = getBlockData<UtilitiesProps>('great_utility', blocks);

  const utilitiesBlockContent = useMemo(() => utilitiesBlockData?.items?.map((val) => ({
    description: val.description,
    thumbnail: baseURL(val.image),
    title: val.title,
    icon: {
      imgSrc: baseURL(val?.thumbnail),
      label: baseString(val?.title),
    },
  })), [utilitiesBlockData]);

  return (
    <UtilitiesTemplate
      title={utilitiesBlockData?.titleSection}
      listUtilities={utilitiesBlockContent}
    />
  );
};
export default Utilities;
