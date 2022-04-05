import React from 'react';

import Banner from './banner';
import Form from './form';
import Map from './map';

import imgBalloon from 'assets/images/pages/contact/balloon.png';
import imgLeaf from 'assets/images/pages/contact/leaf.png';
import Image from 'components/atoms/Image';

const Screen: React.FC = () => (
  <>
    <Banner />
    <Map />
    <section className="s-contact_layer">
      <div className="s-contact_layer_balloon">
        <Image src={imgBalloon} alt="balloon" />
      </div>
      <div className="s-contact_layer_leaf">
        <Image src={imgLeaf} alt="leaf" />
      </div>
      <Form />
    </section>
  </>
);

export default Screen;
