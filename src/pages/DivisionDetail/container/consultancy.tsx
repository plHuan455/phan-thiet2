import React from 'react';

import layer3 from 'assets/images/consultancy/blue-background-2.png';
import layer1 from 'assets/images/consultancy/kingdom-left.png';
import layer2 from 'assets/images/consultancy/kingdom-right.png';
import layer4 from 'assets/images/consultancy/orange-background.png';
import ConsultancyCommon from 'common/Consultancy';
import Image from 'components/atoms/Image';

const LayerSection: React.FC = () => (
  <div className="s-consultancy">
    <div className="s-consultancy_layer1">
      <Image src={layer1} alt="layer1" ratio="326x221" />
    </div>
    <div className="s-consultancy_layer2">
      <Image src={layer2} alt="layer1" ratio="238x150" />
    </div>
    <div className="s-consultancy_layer3">
      <Image src={layer3} alt="layer3" ratio="1369x372" />
    </div>
    <div className="s-consultancy_layer4">
      <Image src={layer4} alt="layer4" ratio="1369x225" />
    </div>
  </div>
);

interface ConsultancyProps {
  title?: string;
}

const Consultancy: React.FC<ConsultancyProps> = ({ title }) => (
  <section
    className="position-relative"
    style={{ color: 'var(--theme)' }}
  >
    <ConsultancyCommon
      layer={<LayerSection />}
      py="lg"
      title={{
        text: title || '',
        modifiers: ['400', 'inherit', 's015'],
      }}
      variantButton="inherit"
    />
  </section>
);

Consultancy.defaultProps = {
  title: '',
};
export default Consultancy;
