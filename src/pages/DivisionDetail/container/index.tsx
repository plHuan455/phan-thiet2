import React from 'react';

import Banner from './banner';
import Collection from './collection';
import Journeys from './journeys';
import Summary from './summary';

const Screen: React.FC = () => (
  <>
    <Banner />
    <Summary />
    <Collection />
    <Journeys />
  </>
);

export default Screen;
