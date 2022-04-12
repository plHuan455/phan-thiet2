import React from 'react';

import Banner from './banner';
import Journeys from './journeys';
import Summary from './summary';

const Screen: React.FC = () => (
  <>
    <Banner />
    <Summary />
    <Journeys />
  </>
);

export default Screen;
