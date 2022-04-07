import React from 'react';

import Banner from './banner';
import Division from './division';
import Position from './position';
import Selection from './selection';
import Utilities from './utilities';

import sand from 'assets/images/pages/home/sand.png';
import Image from 'components/atoms/Image';

const Screen: React.FC = () => (
  <>
    <Banner />
    <Position />
    <Selection />
    <Utilities />
    <div className="p-home_sand">
      <div className="p-home_sand_layer">
        <Image src={sand} alt="sand" />
      </div>
    </div>
    <Division />
  </>
);

export default Screen;
