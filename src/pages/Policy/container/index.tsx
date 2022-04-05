import React from 'react';

import Banner from './banner';
import Ckeditor from './ckeditor';

import imgBalloon from 'assets/images/pages/policy/balloon.png';
import Image from 'components/atoms/Image';

const Screen: React.FC = () => (
  <>
    <Banner />
    <section className="s-policy_layer u-pt-md-80 u-pb-md-80 u-pt-48 u-pb-48">
      <div className="s-policy_layer_balloon">
        <Image src={imgBalloon} alt="balloon" />
      </div>
      <Ckeditor />
    </section>
  </>
);

export default Screen;
