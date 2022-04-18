import React from 'react';
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

import { getSubDivisionDetailService } from 'services/subdivision';
import { baseString, baseURL } from 'utils/functions';

const Screen: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: subDivisionDetail } = useQuery(
    ['getSubDivisionDetail', [slug]],
    () => getSubDivisionDetailService(slug),
    {
      enabled: !!slug,
    },
  );

  return (
    <>
      <Banner thumbnail={baseURL(subDivisionDetail?.thumbnail)} />
      <IntroVideo />
      <Summary data={subDivisionDetail} />
      <Location />
      <Utilities data={subDivisionDetail} />
      <Collection
        title={baseString(subDivisionDetail?.content.collection.title)}
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
