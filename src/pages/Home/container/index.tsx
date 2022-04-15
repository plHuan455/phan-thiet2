import React from 'react';

import Banner from './banner';
import Consultancy from './consultancy';
import Division from './division';
import Events from './events';
import Feedbacks from './feedbacks';
import Highway from './highway';
import Journeys from './journeys';
import News from './news';
import Position from './position';
import Selection from './selection';
import Utilities from './utilities';

import sand1 from 'assets/images/pages/home/sand_1.png';
import sand2 from 'assets/images/pages/home/sand_2.png';
import Image from 'components/atoms/Image';

const Screen: React.FC<BasePageDataTypes<any>> = ({
  blocks, banners,
}) => (
  <>
    {/* TODO: Add banner later */}
    <Banner banners={banners} blocks={blocks} />
    <Position blocks={blocks} />
    <Selection blocks={blocks} />
    <Highway />
    <Utilities blocks={blocks} />
    <div className="p-home_sand1">
      <div className="p-home_sand1_layer">
        <Image src={sand1} alt="sand" />
      </div>
    </div>
    <Division blocks={blocks} />
    <Journeys blocks={blocks} />
    <div className="p-home_sand2">
      <div className="p-home_sand2_layer">
        <Image src={sand2} alt="sand" />
      </div>
    </div>
    <News blocks={blocks} />
    <Events blocks={blocks} />
    <Feedbacks blocks={blocks} />
    <Consultancy />
  </>
);

export default Screen;
