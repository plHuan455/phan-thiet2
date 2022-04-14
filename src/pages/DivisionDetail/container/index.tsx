import React from 'react';

import Banner from './banner';
import Collection from './collection';
import Journeys from './journeys';
import Summary from './summary';
import Utilities from './utilities';

const Screen: React.FC = () => (
  <>
    <Banner />
    <Summary />
    <Utilities />
    <Collection />
    <Journeys />
  </>
);

export default Screen;
