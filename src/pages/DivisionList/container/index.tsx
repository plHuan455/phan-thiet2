import React from 'react';

import Banner from './banner';
import Consultancy from './consultancy';
import Map from './map';
import Divisions from './subdivion';

const Screen: React.FC<BasePageDataTypes<any>> = ({ banners, blocks }) => (
  <>
    <Banner banners={banners} />
    <Divisions blocks={blocks} />
    <Map blocks={blocks} />
    <Consultancy blocks={blocks} />
  </>
);

export default Screen;
