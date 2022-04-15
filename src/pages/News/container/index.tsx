import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';

import useNews from '../hook';

import Banner from './banner';
import Consultancy from './consultancy';
import Documents from './documents';
import Events from './events';
import Images from './images';
import MenuTag from './menus';
import News from './news';
import Section from './section';
import Videos from './videos';

import HelmetContainer from 'common/Helmet';
import { getOverviewListService } from 'services/overviews';
import { getOgDataPage } from 'utils/functions';

const Screen: React.FC<BasePageDataTypes<any>> = ({
  blocks,
  banners,
  pageData,
  seoData,
}) => {
  const { ref } = useNews();

  const { data } = useQuery('getOverviewList', () => getOverviewListService());
  console.log(data);

  return (
    <>
      <HelmetContainer seoData={seoData} ogData={getOgDataPage(pageData)} />
      <Banner banners={banners} blocks={blocks} />
      <MenuTag />
      <Section ref={ref.news}>
        <News />
      </Section>
      <Section ref={ref.events}>
        <Events />
      </Section>
      <Section ref={ref.images}>
        <Images />
      </Section>
      <Section ref={ref.videos}>
        <Videos />
      </Section>
      <Section ref={ref.documents}>
        <Documents />
      </Section>
      <section>
        <Consultancy />
      </section>
    </>
  );
};

export default Screen;
