import React from 'react';

import Banner from './banner';
import Form from './form';
import Map from './map';

import imgBallon from 'assets/images/pages/contact/ballon.png';
import imgLeaf from 'assets/images/pages/contact/leaf.png';
import Container from 'common/Container';
import Image from 'components/atoms/Image';

const Screen: React.FC = () => (
  <>
    <Banner />
    <Map />
    <section className="s-contact_layer">
      <Container>
        <div className="s-contact_layer_ballon">
          <Image src={imgBallon} alt="ballon" />
        </div>
        <div className="s-contact_layer_leaf">
          <Image src={imgLeaf} alt="leaf" />
        </div>
      </Container>
      <Form />
    </section>
  </>
);

export default Screen;
