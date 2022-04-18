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
import { LanguageContext } from 'common/Language';
import { getOverviewListService } from 'services/overviews';
import { getOgDataPage } from 'utils/functions';

const Screen: React.FC<BasePageDataTypes<any>> = ({
  blocks,
  banners,
  pageData,
  seoData,
}) => {
  const langContext = useContext(LanguageContext);
  const { ref } = useNews();
  const { data } = useQuery(['getOverviewList', [langContext]], () => getOverviewListService());

  return (
    <>
      <HelmetContainer seoData={seoData} ogData={getOgDataPage(pageData)} />
      <Banner banners={banners} blocks={blocks} />
      <MenuTag />
      {Array.isArray(data?.news) && data?.news && data?.news?.length > 0 && (
        <Section ref={ref.news}>
          <News news={data?.news} />
        </Section>
      )}
      <Section ref={ref.events}>
        <Events />
      </Section>
      {Array.isArray(data?.images) && data?.images && data?.images?.length > 0 && (
        <Section ref={ref.images}>
          <Images images={data?.images} />
        </Section>
      )}

      {Array.isArray(data?.videos) && data?.videos && data?.videos?.length > 0 && (
        <Section ref={ref.videos}>
          <Videos videos={data?.videos} />
        </Section>
      )}

      {Array.isArray(data?.documents) && data?.documents && data?.documents?.length > 0 && (
        <Section ref={ref.documents}>
          <Documents documents={data?.documents} />
        </Section>
      )}
      <section>
        <Consultancy />
      </section>
    </>
  );
};

export default Screen;
