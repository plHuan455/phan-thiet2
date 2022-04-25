import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';

import useTab from '../hook/useTab';

import Banner from './banner';
import Consultancy from './consultancy';
import Documents from './documents';
import Events from './events';
import Images from './images';
import MenuTag from './menus';
import News from './news';
import Videos from './videos';

import HelmetContainer from 'common/Helmet';
import i18n from 'i18n';
import { getOverviewListService } from 'services/overviews';
import { getOgDataPage } from 'utils/functions';

export interface MyCustomCSS extends React.CSSProperties {
  '--theme': string;
}

const Screen: React.FC<BasePageDataTypes<any>> = ({
  blocks,
  banners,
  pageData,
  seoData,
}) => {
  const { language } = i18n;
  const [searchParams] = useSearchParams();
  const keywordParams = useMemo(() => searchParams.get('keyword') || '', [
    searchParams,
  ]);
  const { data } = useQuery(['getOverviewList', [language, keywordParams]], () => getOverviewListService({
    keyword: keywordParams,
  }));

  const tabMenu = useTab({
    data,
    blocks,
  });

  const styles = useMemo((): MyCustomCSS => ({
    '--theme': '#005C8F',
  }), []);

  return (
    <>
      <HelmetContainer seoData={seoData} ogData={getOgDataPage(pageData)} />
      <Banner banners={banners} blocks={blocks} />
      <MenuTag
        {...tabMenu}
      />
      <div style={styles}>
        <div ref={tabMenu.menuList[0].ref}>
          <News news={data?.news} blocks={blocks} />
        </div>
        <div ref={tabMenu.menuList[1].ref}>
          <Events events={data?.events} blocks={blocks} />
        </div>
        <div ref={tabMenu.menuList[2].ref}>
          <Images images={data?.images} blocks={blocks} />
        </div>
        <div ref={tabMenu.menuList[3].ref}>
          <Videos videos={data?.videos} blocks={blocks} />
        </div>
        <div ref={tabMenu.menuList[4].ref}>
          <Documents documents={data?.documents} blocks={blocks} />
        </div>
        <div>
          <Consultancy blocks={blocks} />
        </div>
      </div>
    </>
  );
};

export default Screen;
