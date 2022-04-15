import React from 'react';

import Banner from './banner';
import Collection from './collection';
import Consultancy from './consultancy';
import Division from './division';
import Journeys from './journeys';
import Location from './location';
import Summary from './summary';
import Utilities from './utilities';

const Screen: React.FC = () => (
  <>
    <Banner />
    <Summary />
    <Location />
    <Utilities />
    <Collection />
    <Journeys />
    <Division />
    <Consultancy />
  </>
);

export default Screen;
