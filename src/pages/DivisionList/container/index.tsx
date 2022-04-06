import React from 'react';

import Banner from './banner';
import Consultancy from './consultancy';
import Map from './map';
import Divisions from './subdivion';

const Screen: React.FC = () => (
  <>
    <Banner />
    <Divisions />
    <Map />
    <Consultancy />
  </>
);

export default Screen;
