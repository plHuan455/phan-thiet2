import React, { useMemo } from 'react';

import Animate from 'components/organisms/Animate';
import SelectionTemplate from 'components/templates/Selection';
import { getBlockData, baseURL, baseString } from 'utils/functions';

interface SelectionProps{
  image: string,
  title: string
 }

const Selection: React.FC<SectionBlocks> = ({ blocks }) => {
  const positionBlockContent = useMemo(() => {
    const content = getBlockData<SelectionProps>('perfect_choice', blocks);
    return {
      title: baseString(content?.title),
      image: baseURL(content?.image),
    };
  }, [blocks]);

  return (
    <Animate type="fadeInUp">
      <section className="u-mt-xl-206 u-mt-lg-160 u-mt-0">
        <SelectionTemplate
          title={positionBlockContent.title}
          image={positionBlockContent.image}
        />
      </section>
    </Animate>
  );
};

export default Selection;
