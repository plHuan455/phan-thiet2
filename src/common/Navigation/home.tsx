import { AxiosError } from 'axios';
import React from 'react';

import Loading from './loading';

import RenderPage from '.';

import usePreview from 'hooks/usePreview';
import Error from 'pages/Error';
import { staticHomeService } from 'services/pages';

const HomeNavigation: React.FC = () => {
  const {
    data,
    isLoading,
    error,
  } = usePreview<
    BasePageDataTypes<any>,
    BasePageDataTypes<any>
  >({
    name: 'HomeData',
    cb: () => staticHomeService(),
    deps: [],
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error status={(error as AxiosError)?.response?.status} />;
  }

  return (
    <RenderPage data={data} />
  );
};

export default HomeNavigation;
