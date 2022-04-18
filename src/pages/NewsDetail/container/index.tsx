import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import Banner from './banner';
import Detail, { DetailProps } from './detail';

import error404 from 'assets/images/error/404.png';
import LoadingPage from 'common/Navigation/loading';
import Error from 'components/templates/Error';
import { getNewsDetailService } from 'services/news';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import { baseString, getFullDate, getTimePastToCurrent } from 'utils/functions';

const ErrorTemplate = () => (
  <Error
    imgSrc={error404}
    title="Rất tiếc, chúng tôi không tìm thấy trang tin tức này"
    description="Vui lòng trở về trang chủ hoặc liên hệ với chúng tôi để được hỗ trợ."
    back={{
      text: 'Trang chủ',
      url: '/',
      target: '_self',
    }}
    contact={{
      text: 'Liên hệ',
      url: '/',
      target: '_self',
    }}
  />
);

const Screen: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: newsDetail, isLoading, error } = useQuery(
    ['getNewsDetailData', slug],
    () => getNewsDetailService(slug),
    {
      ...DEFAULT_QUERY_OPTION,
      enabled: !!slug,
    },
  );
  const newsDetaiLData = useMemo(() : DetailProps => ({
    content: baseString(newsDetail?.content),
    title: baseString(newsDetail?.title),
    timeLeave: getTimePastToCurrent(newsDetail?.publishedAt),
    dateLeave: getFullDate(newsDetail?.publishedAt),
    tags: newsDetail?.tags.map((item) => ({
      href: '/',
      name: item?.name,
    })) || [],
  }), [newsDetail]);

  if (isLoading) return <LoadingPage />;
  if (error) return <ErrorTemplate />;

  return (
    <>
      <Banner thumbnail={newsDetail?.thumbnail} />
      <Detail {...newsDetaiLData} />
    </>
  );
};

export default Screen;
