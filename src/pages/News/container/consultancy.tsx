import React from 'react';

import Section from './section';

import layer1 from 'assets/images/pages/news/layer_1.png';
import ConsultancyCommon from 'common/Consultancy';
import Image from 'components/atoms/Image';
import { baseString, getBlockData } from 'utils/functions';

interface ConsultancyBlocks {
  title: string;
}

const Consultancy: React.FC<SectionBlocks> = ({ blocks }) => {
  const consultancyBlock = getBlockData<ConsultancyBlocks>('form_register', blocks);
  return (
    <Section className="s-consultancy">
      <ConsultancyCommon
        layer={(
          <div className="s-consultancy_layer">
            <Image src={layer1} alt="ballon" ratio="326x221" />
          </div>
          )}
        title={{
          text: baseString(consultancyBlock?.title),
          modifiers: ['700', 'gradientGreen', 's015'],
        }}
      />
    </Section>
  );
};

export default Consultancy;
