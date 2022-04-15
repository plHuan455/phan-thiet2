import React, { useMemo } from 'react';

import balloon from 'assets/images/pages/divisionList/balloonDivisions.png';
import Image from 'components/atoms/Image';
import Subdivision from 'components/templates/Subdivision';
import { getBlockData } from 'utils/functions';

interface DivisionProps {
  title: string,
  button: string,
}

const Divisions: React.FC<SectionBlocks> = ({ blocks }) => {
  const blockContent = useMemo(() => {
    const blockPageContent = getBlockData<DivisionProps>(
      'list_subdivision',
      blocks,
    );
    return {
      title: blockPageContent?.title,
      button: blockPageContent?.button,
    };
  }, [blocks]);

  return (
    <section className="s-divisions u-mt-md-88 u-mt-48">
      {/* TODO: Add Animation Later */}
      <div className="s-divisions-balloon">
        <Image src={balloon} ratio="1x1" size="contain" />
      </div>
      <Subdivision
        title={blockContent?.title}
        list={new Array(9).fill({
          imgSrc: 'https://source.unsplash.com/random',
          title: 'The Florida',
          description: 'Ocean Residence kiến tạo nơi đáng  sống mới cho cư dân khi tận hưởng giá trị Ocean Residence kiến tạo nơi đáng  sống mới cho cư dân khi tận hưởng giá trị ..',
          href: '/',
        })}
        btn={{
          text: blockContent?.button,
          url: '/',
        }}
      />
    </section>
  );
};
export default Divisions;
