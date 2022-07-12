import React from 'react';

import Banner from './banner';
import Consultancy from './consultancy';
import Map from './map';
import Divisions from './subdivion';

import ConditionSection from 'common/ConditionSection';
import HelmetContainer from 'common/Helmet';
import { getOgDataPage } from 'utils/functions';

const Screen: React.FC<BasePageDataTypes<any>> = ({
  banners, blocks, seoData, pageData,
}) => (
  <>
    <HelmetContainer seoData={seoData} ogData={getOgDataPage(pageData)} />
    <Banner banners={banners} />
    <ConditionSection blocks={blocks} code="list_subdivision">
      <Divisions blocks={blocks} />
    </ConditionSection>
    <ConditionSection blocks={blocks} code="map">
      <Map blocks={blocks} />
    </ConditionSection>
    <ConditionSection blocks={blocks} code="form_register">
      <Consultancy blocks={blocks} />
    </ConditionSection>
  </>
);

export default Screen;
