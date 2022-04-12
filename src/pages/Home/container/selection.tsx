import React, { useMemo } from 'react';

import SelectionTemplate from 'components/templates/Selection';
import { getBlockData, baseURL } from 'utils/functions';

interface SelectionProps{
  image: string,
  title: string
 }

const Selection: React.FC<SectionBlocks> = ({ blocks }) => {
  const positionBlockContent = useMemo(() => {
    const content = getBlockData<SelectionProps>('perfect_choice', blocks);
    return {
      title: content?.title || '',
      image: baseURL(content?.image) || '',
    };
  }, [blocks]);

  return (
    <section className="u-mt-xl-206 u-mt-lg-160 u-mt-0">
      <SelectionTemplate
        title={positionBlockContent.title}
        image={positionBlockContent.image}
      />
    </section>
  );
};

export default Selection;
