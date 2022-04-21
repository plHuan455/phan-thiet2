import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

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
import { getSubDivisionDetailService } from 'services/subdivision';
import { baseString, baseURL } from 'utils/functions';

export interface MyCustomCSS extends React.CSSProperties {
  '--theme': string;
}

const Screen: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: subDivisionDetail } = useQuery(
    ['getSubDivisionDetail', [slug]],
    () => getSubDivisionDetailService(slug),
    {
      enabled: !!slug,
    },
  );

  const styles = useMemo((): MyCustomCSS => ({
    '--theme': baseString(subDivisionDetail?.color),
  }), [subDivisionDetail]);

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
  } = useMemo(() => ({
    ...contentSubdivision,
  }), [contentSubdivision]);

  return (
    <>
      <HelmetContainer
        seoData={subDivisionDetail?.seoData}
        ogData={subDivisionDetail?.openGraph}
      />

      <div style={styles}>
        {/* Banner */}
        <Banner thumbnail={baseURL(subDivisionDetail?.thumbnail)} />

        {/* Video */}
        <IntroVideo data={video} />

        {/* Content */}
        <Summary data={content} />

        {/* Location */}
        <Location data={location} type={subDivisionDetail?.type} />

        {/* Utilities */}
        <Utilities data={utility} />

        {/* Collection */}
        <Collection data={collection} />

        {/* Library */}
        <Library data={library} />

        {/* Journey */}
        <Journeys
          id={subDivisionDetail?.id}
          data={journey}
        />

        {/* Related */}
        <Division data={related} />

        {/* Consultancy */}
        <Consultancy data={subscribe} />
      </div>
    </>
  );
};

export default Screen;
