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

import imgMap from 'assets/images/divisionUtilities/bg.png';
import { getSubDivisionDetailService } from 'services/subdivision';
import { baseURL } from 'utils/functions';

const Screen: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: subDivisionDetail } = useQuery(
    'getSubDivisionDetail',
    () => getSubDivisionDetailService(slug),
    {
      enabled: !!slug,
    },
  );

  const summaryData = useMemo(() => [
    subDivisionDetail?.content.items.item1,
    subDivisionDetail?.content.items.item2,
  ].map((item) => ({
    thumbnail: baseURL(item?.image),
    title: item?.title,
  })), [subDivisionDetail]);
  return (
    <>
      <Banner thumbnail={baseURL(subDivisionDetail?.thumbnail)} />
      <IntroVideo />
      <Summary
        title={subDivisionDetail?.content.title}
        description={subDivisionDetail?.content.description}
        data={summaryData}
      />
      <Location />
      {/* // TODO: Update API later */}
      <Utilities
        background={imgMap}
        title={subDivisionDetail?.content.utility.title}
        listLocations={[]}
      />
      <Collection
        title={subDivisionDetail?.content.collection.title || ''}
        description={subDivisionDetail?.content.collection.description}
      />
      <Library title={subDivisionDetail?.content.library.title} />
      <Journeys title={subDivisionDetail?.content.journey.title} />
      <Division title={subDivisionDetail?.content.related.title} />
      <Consultancy title={subDivisionDetail?.content.subscribe.title} />
    </>
  );
};

export default Screen;
