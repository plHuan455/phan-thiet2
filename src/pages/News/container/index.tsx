import React, { useContext } from 'react';
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
import { LanguageContext, LanguageContextResponse } from 'common/Language';
import { getOverviewListService } from 'services/overviews';
import { getOgDataPage } from 'utils/functions';

const Screen: React.FC<BasePageDataTypes<any>> = ({
  blocks,
  banners,
  pageData,
  seoData,
}) => {
  const langContext = useContext(LanguageContext);
  const { language } = langContext as LanguageContextResponse;
  const { ref } = useNews();
  const { data } = useQuery(['getOverviewList', [language.isChange]], () => getOverviewListService());

  return (
    <>
      <HelmetContainer seoData={seoData} ogData={getOgDataPage(pageData)} />
      <Banner banners={banners} blocks={blocks} />
      <MenuTag />
      <Section ref={ref.news}>
        <News news={data?.news} blocks={blocks} />
      </Section>
      <Section ref={ref.events}>
        <Events events={data?.events} blocks={blocks} />
      </Section>
      <Section ref={ref.images}>
        <Images images={data?.images} blocks={blocks} />
      </Section>
      <Section ref={ref.videos}>
        <Videos videos={data?.videos} blocks={blocks} />
      </Section>
      <Section ref={ref.documents}>
        <Documents documents={data?.documents} blocks={blocks} />
      </Section>
      <section>
        <Consultancy blocks={blocks} />
      </section>
    </>
  );
};

export default Screen;
