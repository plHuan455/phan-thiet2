import React, { useMemo } from 'react';

import bgConsultancy from 'assets/images/pages/divisionList/bgConsultancy.png';
import ConsultancyCommon from 'common/Consultancy';
import Image from 'components/atoms/Image';
import { baseString, getBlockData } from 'utils/functions';

interface ConsultancyProps {
  title: string
}

const Consultancy: React.FC<SectionBlocks> = ({ blocks }) => {
  const blockContent = useMemo(() => {
    const blockPageContent = getBlockData<ConsultancyProps>(
      'form_register',
      blocks,
    );
    return {
      title: baseString(blockPageContent?.title),
    };
  }, [blocks]);

  return (
    <div className="s-consultancy">
      <ConsultancyCommon
        title={{
          text: blockContent?.title,
          modifiers: ['700', 'gradientGreen', 's015'],
        }}
        layer={(
          <div className="s-consultancy-bg">
            <Image src={bgConsultancy} />
          </div>
        )}
      />
    </div>
  );
};
export default Consultancy;
