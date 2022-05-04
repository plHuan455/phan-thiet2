import React from 'react';

import Banner from './banner';
import Consultancy from './consultancy';
import Map from './map';
import Divisions from './subdivion';

import HelmetContainer from 'common/Helmet';
import { getOgDataPage } from 'utils/functions';

const Screen: React.FC<BasePageDataTypes<any>> = ({
  banners, blocks, seoData, pageData,
}) => (
  <>
    <HelmetContainer seoData={seoData} ogData={getOgDataPage(pageData)} />
    <Banner banners={banners} />
    <Divisions blocks={blocks} />
    <Map blocks={blocks} />
    <Consultancy blocks={blocks} />
  </>
);

export default Screen;
