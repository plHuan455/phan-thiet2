import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
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
import Icon from 'components/atoms/Icon';
import Text from 'components/atoms/Text';
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
  const { t } = useTranslation();
  const { language } = i18n;
  const [searchParams] = useSearchParams();
  const keywordParams = useMemo(() => searchParams.get('keyword') || '', [
    searchParams,
  ]);
  const { data, isLoading } = useQuery(['getOverviewList', [language, keywordParams]], () => getOverviewListService({
    keyword: keywordParams,
    limit: 6,
    page: 1,
  }));

  const tabMenu = useTab({
    data,
    blocks,
  });

  const styles = useMemo((): MyCustomCSS => ({
    '--theme': '#005C8F',
  }), []);

  const checkHasData = useMemo(
    () => !data?.documents.total
          && !data?.events.total
          && !data?.images.total
          && !data?.news.total
          && !data?.videos.total,
    [data],
  );

  return (
    <>
      <HelmetContainer seoData={seoData} ogData={getOgDataPage(pageData)} />
      <Banner banners={banners} blocks={blocks} />
      <MenuTag
        {...tabMenu}
      />
      <div style={styles}>
        {isLoading && (
        <div className="d-flex justify-content-center u-mt-100 u-mb-60">
          <Icon iconName="loadingInherit" size="40" />
        </div>
        )}
        {checkHasData && !isLoading && (
        <div className="u-mt-100 u-mb-60">
          <Text modifiers={['gradientGreen', 'center', '500', '20x32']}>{t('general.not_found_data')}</Text>
        </div>
        )}
        <div ref={tabMenu.menuList[0].ref}>
          <News news={data?.news} blocks={blocks} keyword={keywordParams} />
        </div>
        <div ref={tabMenu.menuList[1].ref}>
          <Events events={data?.events} blocks={blocks} keyword={keywordParams} />
        </div>
        <div ref={tabMenu.menuList[2].ref}>
          <Images images={data?.images} blocks={blocks} keyword={keywordParams} />
        </div>
        <div ref={tabMenu.menuList[3].ref}>
          <Videos videos={data?.videos} blocks={blocks} keyword={keywordParams} />
        </div>
        <div ref={tabMenu.menuList[4].ref}>
          <Documents documents={data?.documents} blocks={blocks} keyword={keywordParams} />
        </div>
        <div>
          <Consultancy blocks={blocks} />
        </div>
      </div>
    </>
  );
};

export default Screen;
