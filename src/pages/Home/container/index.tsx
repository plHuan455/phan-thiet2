import React from 'react';
import LazyLoad from 'react-lazyload';

import Banner from './banner';
import Consultancy from './consultancy';
import Division from './division';
import Events from './events';
import Feedbacks from './feedbacks';
import Highway from './highway';
import News from './news';
import Position from './position';
import Selection from './selection';
import Utilities from './utilities';

import sand1 from 'assets/images/pages/home/sand_1.png';
import sand2 from 'assets/images/pages/home/sand_2.png';
import HelmetContainer from 'common/Helmet';
import Image from 'components/atoms/Image';
import { getOgDataPage } from 'utils/functions';

const Screen: React.FC<BasePageDataTypes<any>> = ({
  blocks, banners, seoData, pageData,
}) => (
  <>
    <HelmetContainer seoData={seoData} ogData={getOgDataPage(pageData)} />
    <Banner banners={banners} blocks={blocks} />
    <LazyLoad height={300} once>
      <Position blocks={blocks} />
    </LazyLoad>
    <LazyLoad height={300} once>
      <Selection blocks={blocks} />
    </LazyLoad>
    <LazyLoad height={300} once>
      <Highway blocks={blocks} />
    </LazyLoad>
    <LazyLoad height={300} once>
      <Utilities blocks={blocks} />
    </LazyLoad>
    <LazyLoad height={300} once>
      <div className="p-home_sand1">
        <div className="p-home_sand1_layer">
          <Image src={sand1} alt="sand" />
        </div>
      </div>
      <Division blocks={blocks} />
      <div className="p-home_sand2">
        <div className="p-home_sand2_layer">
          <Image src={sand2} alt="sand" />
        </div>
      </div>
    </LazyLoad>
    <LazyLoad height={300} once>
      <News blocks={blocks} />
    </LazyLoad>
    <LazyLoad height={300} once>
      <Events blocks={blocks} />
    </LazyLoad>
    <LazyLoad height={300} once>
      <Feedbacks blocks={blocks} />
    </LazyLoad>
    <LazyLoad height={300} once>
      <Consultancy blocks={blocks} />
    </LazyLoad>
  </>
);

export default Screen;
