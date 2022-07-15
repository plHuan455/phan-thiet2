import React, { useContext, useEffect, useMemo } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import useMenu from '../hooks/useMenu';

import Banner from './banner';
import Collection from './collection';
import Consultancy from './consultancy';
import Division from './division';
import IntroVideo from './introVideo';
import Journeys from './journeys';
import Library from './library';
import Location from './location';
import Summary from './summary';
import Utilities from './utilities';

import HelmetContainer from 'common/Helmet';
import { LanguageContext, LanguagePrefix } from 'common/Language';
import LoadingPage from 'common/Navigation/loading';
import RedirectNav from 'common/Navigation/redirect';
import i18n from 'i18n';
import { getSubDivisionDetailService } from 'services/subdivision';
import { useAppDispatch } from 'store/hooks';
import { changeMenuDivision } from 'store/menus';
import CONSTANTS from 'utils/constants';
import { baseString, baseURL } from 'utils/functions';

export interface MyCustomCSS extends React.CSSProperties {
  '--theme': string;
}

interface ScreenProps {
  setLogoDivision?: (val: string) => void;
}

const Screen: React.FC<ScreenProps> = ({ setLogoDivision }) => {
  const { language } = i18n;
  const { slug } = useParams<{ slug: string }>();
  const context = useContext(LanguageContext);
  const dispatch = useAppDispatch();

  const { data: subDivisionDetail, isFetching, error } = useQuery(
    ['SubdivisionDetail', { slug, language }],
    () => getSubDivisionDetailService(slug),
    {
      enabled: !!slug,
    },
  );

  const styles = useMemo((): MyCustomCSS => ({
    '--theme': baseString(subDivisionDetail?.color),
  }), [subDivisionDetail]);

  useEffect(() => {
    if (subDivisionDetail?.translations?.length && context?.translation?.setData) {
      const divisionDetailTranslation = subDivisionDetail?.translations.map(
        (x) => ({
          ...x,
          slug: `${CONSTANTS.PREFIX.DIVISION[x.locale.toUpperCase() as LanguagePrefix]}/${x.slug}`,
        }),
      );
      context.translation.setData(divisionDetailTranslation);
    }
    if (subDivisionDetail?.menu.length) {
      dispatch(changeMenuDivision(subDivisionDetail.menu));
    }
    return () => {
      if (context?.translation?.setData) {
        context.translation.setData([]);
      }
      dispatch(changeMenuDivision([]));
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subDivisionDetail]);

  const contentSubdivision = useMemo(
    () => subDivisionDetail && subDivisionDetail.content, [subDivisionDetail],
  );

  const {
    video,
    content,
    location,
    utility,
    collection,
    library,
    journey,
    related,
    subscribe,
    map,
  } = useMemo(() => ({
    ...contentSubdivision,
    ...subDivisionDetail?.utilityMap,
  }), [contentSubdivision, subDivisionDetail]);

  const refSection = useMenu();

  useEffect(() => {
    if (subDivisionDetail?.logo && setLogoDivision) {
      setLogoDivision(baseURL(subDivisionDetail?.logo));
    }
  }, [subDivisionDetail, setLogoDivision]);

  if (isFetching) {
    return (
      <LoadingPage />
    );
  }

  if (error) {
    return (
      <RedirectNav />
    );
  }

  return (
    <>
      <HelmetContainer
        seoData={subDivisionDetail?.seoData}
        ogData={subDivisionDetail?.openGraph}
      />

      <div style={styles}>
        {/* Banner */}
        <Banner banners={subDivisionDetail?.banner || []} />

        {/* Video */}
        {video?.active && <IntroVideo data={video} />}

        {/* Content */}
        {content?.active && <Summary ref={refSection.menuList[0].ref} data={content} />}

        {/* Location */}
        {location?.active && <Location data={location} type={subDivisionDetail?.type} />}

        {/* Utilities */}
        {utility?.active && <Utilities ref={refSection.menuList[1].ref} data={utility} map={map} />}

        {/* Collection */}
        {collection?.active && (
        <Collection
          ref={refSection.menuList[2].ref}
          subDivisionId={subDivisionDetail?.id}
          data={collection}
        />
        )}

        {/* Library */}
        {library?.active && (
        <Library
          subDivisionId={subDivisionDetail?.id || -1}
          subDivisionName={subDivisionDetail?.name}
          data={library}
          color={baseString(subDivisionDetail?.color)}
        />
        )}

        {/* Journey */}
        {journey?.active && (
        <Journeys
          id={subDivisionDetail?.id}
          data={journey}
        />
        )}

        {/* Related */}
        {related?.active && <Division subdivisionId={subDivisionDetail?.id} data={related} />}

        {/* Consultancy */}
        {subscribe?.active && <Consultancy data={subscribe} />}
      </div>
    </>
  );
};

Screen.defaultProps = {
  setLogoDivision: undefined,
};

export default Screen;
