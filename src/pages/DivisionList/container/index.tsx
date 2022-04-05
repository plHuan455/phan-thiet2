import React from 'react';

import Banner from './banner';
import Divisions from './subdivion';

const Screen: React.FC = () => (
  <>
    <Banner />
    <section className="u-mt-md-88 u-mt-48">
      <Divisions />
    </section>
  </>
);

export default Screen;
