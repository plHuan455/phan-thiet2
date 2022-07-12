import React from 'react';
import LazyLoad from 'react-lazyload';

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

import sand1 from 'assets/images/pages/home/sand_1.jpg';
import sand2 from 'assets/images/pages/home/sand_2.jpg';
import ConditionSection from 'common/ConditionSection';
import HelmetContainer from 'common/Helmet';
import Image from 'components/atoms/Image';
import { getOgDataPage } from 'utils/functions';

const Screen: React.FC<BasePageDataTypes<any>> = ({
  blocks, banners, seoData, pageData,
}) => (
  <>
    <HelmetContainer seoData={seoData} ogData={getOgDataPage(pageData)} />
    <Banner banners={banners} blocks={blocks} />
    <ConditionSection blocks={blocks} code="map_subdivision">
      <LazyLoad height={300} once>
        <Position blocks={blocks} />
      </LazyLoad>
    </ConditionSection>
    <ConditionSection blocks={blocks} code="perfect_choice">
      <LazyLoad height={300} once>
        <Selection blocks={blocks} />
      </LazyLoad>
    </ConditionSection>
    <ConditionSection blocks={blocks} code="map_location">
      <LazyLoad height={300} once>
        <Highway blocks={blocks} />
      </LazyLoad>
    </ConditionSection>
    <ConditionSection blocks={blocks} code="great_utility">
      <LazyLoad height={300} once>
        <Utilities blocks={blocks} />
      </LazyLoad>
    </ConditionSection>
    <LazyLoad height={300} once>
      <div className="p-home_sand1">
        <div className="p-home_sand1_layer">
          <Image src={sand1} alt="sand" />
        </div>
      </div>
      <ConditionSection blocks={blocks} code="subdivision_novaworld">
        <Division blocks={blocks} />
      </ConditionSection>
      <ConditionSection blocks={blocks} code="experience_secondhome">
        <Journeys blocks={blocks} />
      </ConditionSection>
    </LazyLoad>
    <div className="p-home_section-bottom">
      <img className="p-home_section-bottom_layer" src={sand2} alt="sand" loading="lazy" />
      <ConditionSection blocks={blocks} code="general_news">
        <LazyLoad height={300} once>
          <News blocks={blocks} />
        </LazyLoad>
      </ConditionSection>
      <ConditionSection blocks={blocks} code="event">
        <LazyLoad height={300} once>
          <Events blocks={blocks} />
        </LazyLoad>
      </ConditionSection>
      <ConditionSection blocks={blocks} code="customer_experience">
        <LazyLoad height={300} once>
          <Feedbacks blocks={blocks} />
        </LazyLoad>
      </ConditionSection>
    </div>
    <ConditionSection blocks={blocks} code="project_information">
      <LazyLoad height={300} once>
        <Consultancy blocks={blocks} />
      </LazyLoad>
    </ConditionSection>
  </>
);

export default Screen;
