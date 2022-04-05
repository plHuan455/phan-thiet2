import React from 'react';

import Banner from './banner';
import ConsultancyContainer from './consultancy';
import Map from './map';
import Divisions from './subdivion';

const Screen: React.FC = () => (
  <>
    <Banner />
    <section className="u-mt-md-88 u-mt-48">
      <Divisions />
    </section>
    <section className="u-mt-md-88 u-mt-48">
      <Map />
    </section>
    <section className="u-mt-md-88 u-mt-48">
      <ConsultancyContainer />
    </section>
  </>
);

export default Screen;
