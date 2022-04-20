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

  const content = useMemo(
    () => subDivisionDetail && subDivisionDetail.content, [subDivisionDetail],
  );

  return (
    <>
      <Banner thumbnail={baseURL(subDivisionDetail?.thumbnail)} />
      {
        Boolean(Number(content?.video.active))
        && (
        <IntroVideo src={content?.video.link || ''} />
        )
      }
      {
        Boolean(Number(content?.content.active)) && (
          <Summary data={subDivisionDetail} />
        )
      }
      {
        Boolean(Number(content?.location.active)) && (
          <Location data={subDivisionDetail} />
        )
      }
      {
        Boolean(Number(content?.utility.active)) && (
          <Utilities data={subDivisionDetail} />
        )
      }
      {
        Boolean(Number(content?.collection.active)) && (
          <Collection
            title={baseString(content?.collection.title)}
            description={content?.collection.description}
          />
        )
      }
      {
        Boolean(Number(content?.library.active)) && (
          <Library title={content?.library.title} />
        )
      }
      {
        Boolean(Number(content?.journey.active)) && (
          <Journeys
            id={subDivisionDetail?.id}
            title={content?.journey.title}
          />
        )
      }
      {
        Boolean(Number(content?.related.active)) && (
          <Division title={content?.related.title} />
        )
      }
      {
        Boolean(Number(content?.subscribe.active)) && (
          <Consultancy
            title={content?.subscribe.title}
          />
        )
      }
    </>
  );
};

export default Screen;
