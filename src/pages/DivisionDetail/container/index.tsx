import React from 'react';

import Banner from './banner';
import Collection from './collection';
import Consultancy from './consultancy';
import Division from './division';
import IntroVideo from './introVideo';
import Journeys from './journeys';
import Library from './library';
import Location from './location';
import Summary from './summary';
import Utilities from './utilities';

const Screen: React.FC = () => (
  <>
    <Banner />
    <IntroVideo />
    <Summary />
    <Location />
    <Utilities />
    <Collection />
    <Library />
    <Journeys />
    <Division />
    <Consultancy />
  </>
);

export default Screen;
