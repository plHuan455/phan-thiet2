import React from 'react';

import bgBottom from 'assets/images/pages/home/consultancy/bgBottom.png';
import bgCenter from 'assets/images/pages/home/consultancy/bgCenter.png';
import bgWhite from 'assets/images/pages/home/consultancy/bgWhite.png';
import leavesLeft from 'assets/images/pages/home/consultancy/leavesLeft.png';
import leavesRight from 'assets/images/pages/home/consultancy/leavesRight.png';
import ConsultancyCommon from 'common/Consultancy';
import Image from 'components/atoms/Image';
import Animate from 'components/organisms/Animate';
import { baseString, getBlockData } from 'utils/functions';

interface ConsultancyProps{
  titleSection: string;
}

const Consultancy: React.FC<SectionBlocks> = ({ blocks }) => {
  const consultancyBlocks = getBlockData<ConsultancyProps>('project_information', blocks);
  return (
    <Animate type="fadeInUp">
      <section className="s-consultancy position-relative">
        <ConsultancyCommon
          title={{
            text: baseString(consultancyBlocks?.titleSection),
            modifiers: ['700', 'gradientGreen', 's015'],
          }}
          layer={(
            <>
              <div className="s-consultancy_bgTop">
                <Image src={bgCenter} />
              </div>
              <div className="s-consultancy_bgCenter">
                <Image src={bgWhite} />
              </div>
              <div className="s-consultancy_bgBottom">
                <Image src={bgBottom} />
              </div>
              <div className="s-consultancy_leavesLeft">
                <Image src={leavesLeft} />
              </div>
              <div className="s-consultancy_leavesRight">
                <Image src={leavesRight} />
              </div>
            </>
          )}
        />
      </section>
    </Animate>
  );
};

export default Consultancy;
