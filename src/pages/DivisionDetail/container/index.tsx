import React from 'react';

import Banner from './banner';
import Collection from './collection';
import Consultancy from './consultancy';
import Journeys from './journeys';
import Summary from './summary';
import Utilities from './utilities';
import YouCanCare from './youCanCare';

const Screen: React.FC = () => (
  <>
    <Banner />
    <Summary />
    <Utilities />
    <Collection />
    <Journeys />
    <YouCanCare />
    <Consultancy />
  </>
);

export default Screen;
