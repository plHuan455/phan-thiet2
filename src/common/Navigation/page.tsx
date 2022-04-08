import { AxiosError } from 'axios';
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

import LoadingPage from './loading';

import RenderPage from '.';

import usePreview from 'hooks/usePreview';
import Error from 'pages/Error';
import { pageService } from 'services/pages';
import { baseString } from 'utils/functions';

const Page: React.FC = () => {
  const { pathname } = useLocation();
  const { slug } = useParams<{slug: string}>();

  const { data, isLoading, error } = usePreview<BasePageDataTypes<any>, BasePageDataTypes<any>>({
    name: 'PageData',
    cb: () => pageService(baseString(slug)),
    deps: pathname,
  });

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    return <Error status={(error as AxiosError)?.response?.status} />;
  }

  return <RenderPage data={data} />;
};

export default Page;
