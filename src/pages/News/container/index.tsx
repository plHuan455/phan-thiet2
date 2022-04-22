import React, { useContext } from 'react';
import { useQuery } from 'react-query';

import useTab from '../hook/useTab';

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
  const { data } = useQuery(['getOverviewList', [language.isChange]], () => getOverviewListService());
  const tabMenu = useTab();

  return (
    <>
      <HelmetContainer seoData={seoData} ogData={getOgDataPage(pageData)} />
      <Banner banners={banners} blocks={blocks} />
      <MenuTag
        {...tabMenu}
      />
      <Section ref={tabMenu.menuList[0].ref}>
        <News news={data?.news} blocks={blocks} />
      </Section>
      <Section ref={tabMenu.menuList[1].ref}>
        <Events events={data?.events} blocks={blocks} />
      </Section>
      <Section ref={tabMenu.menuList[2].ref}>
        <Images images={data?.images} blocks={blocks} />
      </Section>
      <Section ref={tabMenu.menuList[3].ref}>
        <Videos videos={data?.videos} blocks={blocks} />
      </Section>
      <Section ref={tabMenu.menuList[4].ref}>
        <Documents documents={data?.documents} blocks={blocks} />
      </Section>
      <section>
        <Consultancy blocks={blocks} />
      </section>
    </>
  );
};

export default Screen;
